import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection/HeroSection';
import BusinessSection from './components/BusinessSection/BusinessSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import LocationSection from './components/LocationSection/LocationSection';
import Footer from './components/layout/Footer';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'KOR' | 'ENG'>('KOR');

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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

        {/* 03 LOCATION Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;