import React from 'react';
import './BusinessSection.css';

const BusinessSection: React.FC = () => {
  const businessAreas = [
    {
      id: 'mechanical',
      icon: '⚙️',
      title: '건축기계설비설계',
      stats: { value: '350+', label: '완료 프로젝트' },
      description: '건축 기계설비 전문 설계',
      details: ['공조/냉난방 설비 설계', '위생/배관 설비 설계', '에너지 효율 최적화']
    },
    {
      id: 'fire',
      icon: '🔥',
      title: '소방설비설계',
      stats: { value: '250+', label: '완료 프로젝트' },
      description: '소방안전 설계 전문',
      details: ['소화설비 설계', '경보/피난 설비 설계', '소방안전 컨설팅']
    },
    {
      id: 'simulation',
      icon: '📊',
      title: '시뮬레이션',
      stats: { value: '150+', label: '분석 프로젝트' },
      description: '설비 성능 분석 및 최적화',
      details: ['에너지 시뮬레이션', 'CFD 유동 해석', '열부하 분석']
    },
    {
      id: 'research',
      icon: '🔬',
      title: '연구소',
      stats: { value: '15+', label: '연구 과제' },
      description: '기술 연구 및 개발',
      details: ['신기술 연구개발', '설비 기술 혁신', '산학협력 프로젝트']
    }
  ];

  return (
    <section className="business-section">
      <div className="business-section__container">
        {/* Section Header */}
        <div className="business-section__header">
          <span className="business-section__label">01</span>
          <h2 className="business-section__title">
            <span className="business-section__title-en">BUSINESS</span>
            <span className="business-section__title-ko">사업분야</span>
          </h2>
          <p className="business-section__subtitle">
            건축설비 설계 전문 기업, 태영설비기술사사무소의 핵심 사업분야
          </p>
        </div>

        {/* Business Areas Grid */}
        <div className="business-section__grid">
          {businessAreas.map((area) => (
            <div key={area.id} className="business-card">
              <div className="business-card__icon-wrapper">
                <div className="business-card__icon">
                  <span>{area.icon}</span>
                </div>
                <div className="business-card__icon-ring"></div>
              </div>

              <h3 className="business-card__title">{area.title}</h3>

              <div className="business-card__stats">
                <span className="business-card__stats-value">{area.stats.value}</span>
                <span className="business-card__stats-label">{area.stats.label}</span>
              </div>

              <p className="business-card__description">{area.description}</p>

              <ul className="business-card__details">
                {area.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>

              <button className="business-card__link">
                자세히 보기
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="business-section__footer">
          <button className="business-section__view-all">
            전체 사업분야 보기
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;