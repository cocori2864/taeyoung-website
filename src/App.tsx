import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection/HeroSection';
import BusinessSection from './components/BusinessSection/BusinessSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import NewsSection from './components/NewsSection/NewsSection';
import CareerSection from './components/CareerSection/CareerSection';
import LocationSection from './components/LocationSection/LocationSection';
import Footer from './components/layout/Footer';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'KOR' | 'ENG'>('KOR');

  return (
    <div className="app">
      {/* Header Component */}
      <Header currentLang={currentLang} onLangChange={setCurrentLang} />

      {/* Main Container - From actual Figma structure */}
      <main className="main" style={{ paddingTop: '80px' }}>
        {/* Hero Section with Navigation (Container in Figma) */}
        <HeroSection />

        {/* 01 BUSINESS Section */}
        <BusinessSection />

        {/* 02 PROJECT Section */}
        <ProjectSection />

        {/* 03 NEWS Section */}
        <NewsSection />

        {/* 04 CAREER Section */}
        <CareerSection />

        {/* 05 LOCATION Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;