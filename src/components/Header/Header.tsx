import React, { useState, useEffect } from 'react';
import './Header.css';

interface HeaderProps {
  currentLang?: 'KOR' | 'ENG';
  onLangChange?: (lang: 'KOR' | 'ENG') => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang = 'KOR', onLangChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'company', label: '회사소개', href: '#hero' },
    { id: 'business', label: '사업분야', href: '#business' },
    { id: 'project', label: '프로젝트', href: '#project' },
    { id: 'location', label: '오시는 길', href: '#location' }
  ];

  const handleLangChange = (lang: 'KOR' | 'ENG') => {
    if (onLangChange) {
      onLangChange(lang);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80; // Header height
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <div className="header-logo">
            <a href="/" aria-label="태영설비기술사사무소 홈">
              <span className="logo-text">TAEYOUNG</span>
              <span className="logo-subtext">태영설비기술사사무소</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="header-nav">
            <ul className="nav-list">
              {navigationItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.href}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="header-right">
            {/* Language Selector */}
            <div className="lang-selector">
              <button
                className={`lang-btn ${currentLang === 'KOR' ? 'active' : ''}`}
                onClick={() => handleLangChange('KOR')}
                aria-label="한국어"
              >
                KOR
              </button>
              <span className="lang-divider">|</span>
              <button
                className={`lang-btn ${currentLang === 'ENG' ? 'active' : ''}`}
                onClick={() => handleLangChange('ENG')}
                aria-label="English"
              >
                ENG
              </button>
            </div>

            {/* Menu Button */}
            <button
              className="menu-button"
              onClick={toggleMobileMenu}
              aria-label="메뉴 열기"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="menu-icon">
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <span className="logo-text">TAEYOUNG</span>
            <span className="logo-subtext">태영설비기술사사무소</span>
          </div>
          <button
            className="mobile-menu-close"
            onClick={toggleMobileMenu}
            aria-label="메뉴 닫기"
          >
            ✕
          </button>
        </div>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navigationItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-lang-selector">
          <button
            className={`mobile-lang-btn ${currentLang === 'KOR' ? 'active' : ''}`}
            onClick={() => handleLangChange('KOR')}
          >
            한국어
          </button>
          <button
            className={`mobile-lang-btn ${currentLang === 'ENG' ? 'active' : ''}`}
            onClick={() => handleLangChange('ENG')}
          >
            English
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;