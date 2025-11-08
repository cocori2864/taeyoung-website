import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const menuSections = [
    {
      title: '회사소개',
      items: ['회사개요', '경영이념', 'CI소개', '연혁']
    },
    {
      title: '사업소개',
      items: ['건축기계설비설계', '소방설비설계', '시뮬레이션', '연구소']
    },
    {
      title: '고객지원',
      items: ['공지사항', 'FAQ', '문의하기', '오시는 길']
    }
  ];

  return (
    <footer className="footer">
      {/* Top Banner Section - Similar to Header */}
      <div className="footer__banner">
        <div className="footer__banner-container">
          <div className="footer__logo">
            <h3>TAEYOUNG</h3>
          </div>
          <nav className="footer__nav">
            {menuSections.map((section, index) => (
              <div key={index} className="footer__nav-section">
                <h4 className="footer__nav-title">{section.title}</h4>
                <ul className="footer__nav-list">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="footer__info">
        <div className="footer__info-container">
          <div className="footer__company">
            <address className="footer__address">
              서울 강남구 개포로 670, 6층 | 대표자: 김선태<br />
              Tel: 02-431-1235 | Fax: 02-431-1237
            </address>
          </div>
          <div className="footer__copyright">
            © 2024 TAEYOUNG Engineering Office. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;