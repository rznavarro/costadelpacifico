import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndicatorsTicker } from './components/IndicatorsTicker';
import { ProjectFinder } from './components/ProjectFinder';
import { ActiveProjectsGrid } from './components/ActiveProjectsGrid';
import { DividendCalculator } from './components/DividendCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoverageMap } from './components/CoverageMap';
import { OurTeam } from './components/OurTeam';
import { Testimonials } from './components/Testimonials';
import { InvestorSection } from './components/InvestorSection';
import { BlogRadar } from './components/BlogRadar';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [selectedProjectForQuote, setSelectedProjectForQuote] = useState<string>('');

  const handleQuoteProject = (proyectoNombre: string) => {
    setSelectedProjectForQuote(proyectoNombre);
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetSelectedProject = () => {
    setSelectedProjectForQuote('');
  };

  const handleScrollToFinder = () => {
    const finderElement = document.getElementById('proyectos');
    if (finderElement) {
      finderElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToContact = () => {
    setSelectedProjectForQuote('general');
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col font-sans select-none antialiased" id="cospac-root">
      
      {/* Navbar flotante superior */}
      <Navbar onCotizarClick={handleScrollToContact} />

      {/* Hero principal estético */}
      <Hero onSearchClick={handleScrollToFinder} />

      {/* Ticker de Indicadores Financieros CLP / UF / USD */}
      <IndicatorsTicker />

      {/* Buscador de Proyectos */}
      <ProjectFinder onQuoteProject={handleQuoteProject} />

      {/* Grid de Proyectos activos e Histórico */}
      <ActiveProjectsGrid onQuoteProject={handleQuoteProject} />

      {/* Calculadora de Dividendo Hipotecario en base a UF actual */}
      <DividendCalculator onQuoteClick={handleScrollToContact} />

      {/* Por qué elegir Costa Pacífico */}
      <WhyChooseUs />

      {/* Mapa de Cobertura interactivo regional */}
      <CoverageMap />

      {/* Equipo Real de Ejecutivas */}
      <OurTeam />

      {/* Testimonios Reales de Clientes */}
      <Testimonials />

      {/* Argumentos para Inversionistas de alto estándar */}
      <InvestorSection onAdvisorClick={handleScrollToContact} />

      {/* Radar Inmobiliario / Artículos del Mercado */}
      <BlogRadar />

      {/* Formulario de Cotización Contextual + Toast de éxito */}
      <ContactForm 
        selectedProject={selectedProjectForQuote} 
        onResetSelectedProject={handleResetSelectedProject} 
      />

      {/* Footer corporativo minimalista negro/blanco */}
      <Footer />

      {/* WhatsApp Widget flotante en viewport con pulso */}
      <WhatsAppFloat />

    </div>
  );
}
