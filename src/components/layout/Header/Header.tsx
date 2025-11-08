import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: '회사소개',
      key: 'company',
      submenu: [
        { title: '개요', link: '/company/overview' },
        { title: '비전', link: '/company/vision' },
        { title: '인재상', link: '/company/people' },
        { title: '연혁', link: '/company/history' },
        { title: 'CSR', link: '/company/csr' },
        { title: '오시는길', link: '/company/contact' }
      ]
    },
    {
      title: '사업분야',
      key: 'business',
      submenu: [
        { title: '개요', link: '/business/overview' },
        { title: '프로젝트', link: '/business/projects' }
      ]
    },
    {
      title: '투자정보',
      key: 'investment',
      submenu: [
        { title: '재무정보', link: '/investment/financial' },
        { title: '전자공고', link: '/investment/announcements' },
        { title: 'IR자료', link: '/investment/materials' },
        { title: '주가정보', link: '/investment/stock' }
      ]
    },
    {
      title: '홍보센터',
      key: 'pr',
      submenu: [
        { title: 'CI', link: '/pr/ci' },
        { title: '뉴스', link: '/pr/news' },
        { title: '브로셔', link: '/pr/brochures' },
        { title: '동영상', link: '/pr/videos' }
      ]
    },
    {
      title: '채용',
      key: 'recruitment',
      submenu: [
        { title: '채용절차', link: '/recruitment/process' },
        { title: '직무소개', link: '/recruitment/jobs' },
        { title: '지원하기', link: '/recruitment/apply' }
      ]
    }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <div className="header__logo">
            <a href="/" aria-label="태영설비기술사사무소 홈">
              <svg width="140" height="32" viewBox="0 0 140 32" fill="none">
                <text x="0" y="24" fill="#005BAC" fontSize="24" fontWeight="700" fontFamily="Arial">
                  TAEYOUNG
                </text>
              </svg>
            </a>
          </div>

          <nav className="header__nav">
            <ul className="header__menu">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className="header__menu-item"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="header__menu-button">
                    {item.title}
                  </button>
                  {item.submenu && activeDropdown === item.key && (
                    <div className="header__dropdown">
                      <ul className="header__submenu">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.link} className="header__submenu-item">
                            <a href={subItem.link} className="header__submenu-link">
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button className="header__search" aria-label="검색">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="header__language">
              <button className="header__language-button">
                KOR
              </button>
              <div className="header__language-dropdown">
                <button>ENG</button>
                <button>ESP</button>
              </div>
            </div>

            <button
              className={`header__mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mega Menu Background */}
        {activeDropdown && <div className="header__mega-bg" />}
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu__overlay" onClick={() => setIsMobileMenuOpen(false)} />
        <nav className="mobile-menu__content">
          <div className="mobile-menu__header">
            <h2>메뉴</h2>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <ul className="mobile-menu__list">
            {menuItems.map((item) => (
              <li key={item.key} className="mobile-menu__item">
                <details>
                  <summary>{item.title}</summary>
                  <ul className="mobile-menu__submenu">
                    {item.submenu?.map((subItem) => (
                      <li key={subItem.link}>
                        <a href={subItem.link}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;