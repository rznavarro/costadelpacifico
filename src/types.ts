export interface Indicadores {
  uf: number;
  dolar: number;
  utm: number;
}

export type RegionType = 'rm' | 'v' | 'vi';
export type EntregaType = 'inmediata' | 'futura' | 'vendido';

export interface Proyecto {
  id: string;
  nombre: string;
  comuna: string;
  region: RegionType;
  entrega: EntregaType;
  precioDesdeUF: number;
  imagenUrl: string;
  descripcion: string;
  caracteristicas: string[];
  dormitorios?: number;
  banos?: number;
  superficie?: number; // m2 construido
  terreno?: number;     // m2 terreno (optional)
  ejecutivaNombre: string;
  ejecutivaFono: string;
}
