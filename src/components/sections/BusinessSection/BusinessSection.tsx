import React from 'react';
import './BusinessSection.css';

interface BusinessArea {
  id: number;
  title: string;
  titleEn: string;
  icon: string;
  description: string;
  services: string[];
  link: string;
}

const BusinessSection: React.FC = () => {
  const businessAreas: BusinessArea[] = [
    {
      id: 1,
      title: '물',
      titleEn: 'WATER',
      icon: '💧',
      description: '깨끗하고 안전한 물 환경을 위한 토탈 솔루션',
      services: ['상수도', '하수도', '댐/수자원'],
      link: '/business/water'
    },
    {
      id: 2,
      title: '도시',
      titleEn: 'URBAN',
      icon: '🏙️',
      description: '미래 도시를 위한 스마트 인프라 구축',
      services: ['도시계획', '조경', '스마트시티'],
      link: '/business/urban'
    },
    {
      id: 3,
      title: '교통',
      titleEn: 'TRANSPORTATION',
      icon: '🚄',
      description: '효율적이고 안전한 교통 인프라 설계',
      services: ['도로', '철도', '교량', '항만'],
      link: '/business/transportation'
    },
    {
      id: 4,
      title: '에너지',
      titleEn: 'ENERGY',
      icon: '⚡',
      description: '지속 가능한 에너지 인프라 구현',
      services: ['태양광', '풍력', '환경플랜트', '열병합'],
      link: '/business/energy'
    }
  ];

  return (
    <section className="business section">
      <div className="container">
        <div className="business__header">
          <span className="business__label">BUSINESS DIVISION</span>
          <h2 className="business__title">
            사업분야
          </h2>
          <p className="business__description">
            태영엔지니어링은 물, 도시, 교통, 에너지 4대 분야에서<br />
            최고의 기술력과 전문성을 바탕으로 종합 엔지니어링 서비스를 제공합니다
          </p>
        </div>

        <div className="business__grid">
          {businessAreas.map((area) => (
            <article key={area.id} className="business-card">
              <a href={area.link} className="business-card__link">
                <div className="business-card__icon">
                  <span>{area.icon}</span>
                </div>
                <div className="business-card__content">
                  <h3 className="business-card__title">
                    {area.title}
                    <span className="business-card__title-en">{area.titleEn}</span>
                  </h3>
                  <p className="business-card__description">
                    {area.description}
                  </p>
                  <ul className="business-card__services">
                    {area.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div className="business-card__arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="business__footer">
          <a href="/business/overview" className="business__more">
            전체 사업분야 보기
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;