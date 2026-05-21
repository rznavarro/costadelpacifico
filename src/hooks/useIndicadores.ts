import { useState, useEffect } from 'react';
import { Indicadores } from '../types';

export function useIndicadores() {
  const [data, setData] = useState<Indicadores | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;
    const cached = localStorage.getItem('indicadores');
    const cachedTime = localStorage.getItem('indicadores_time');

    // Cache de 1 hora
    if (cached && cachedTime && Date.now() - Number(cachedTime) < 3600000) {
      try {
        setData(JSON.parse(cached));
        setLoading(false);
        return;
      } catch (e) {
        localStorage.removeItem('indicadores');
        localStorage.removeItem('indicadores_time');
      }
    }

    fetch('https://mindicador.cl/api')
      .then(r => {
        if (!r.ok) throw new Error('Response not ok');
        return r.json();
      })
      .then(d => {
        if (!active) return;
        const indicadores: Indicadores = {
          uf: d.uf?.valor || 40146,
          dolar: d.dolar?.valor || 915,
          utm: d.utm?.valor || 70588
        };
        localStorage.setItem('indicadores', JSON.stringify(indicadores));
        localStorage.setItem('indicadores_time', String(Date.now()));
        setData(indicadores);
        setLoading(false);
      })
      .catch(() => {
        if (!active) return;
        // Fallback estático realista
        const fallback: Indicadores = { uf: 40146, dolar: 915, utm: 70588 };
        setData(fallback);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { data, loading };
}
