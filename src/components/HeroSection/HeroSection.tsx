import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__container">
        {/* 배경 이미지 - 풍력발전기 이미지 */}
        <div className="hero-section__media">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
            alt="Wind turbines on hills"
            className="hero-section__image"
          />
          <div className="hero-section__overlay" />
        </div>

        {/* 메인 텍스트 콘텐츠 */}
        <div className="hero-section__content">
          <div className="hero-section__text">
            <h1 className="hero-section__title">
              Sustainable Future<br />
              Engineering Excellence
            </h1>
            <p className="hero-section__subtitle">
              태영설비기술사사무소는 최고의 건축설비 설계로<br />
              안전하고 효율적인 공간을 만들어갑니다
            </p>
          </div>
        </div>

        {/* 좌우 네비게이션 버튼 */}
        <div className="hero-section__nav">
          <button className="hero-section__nav-btn hero-section__nav-btn--left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="hero-section__nav-btn hero-section__nav-btn--right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* 하단 인디케이터 */}
        <div className="hero-section__indicators">
          <span className="hero-section__indicator hero-section__indicator--active"></span>
          <span className="hero-section__indicator"></span>
          <span className="hero-section__indicator"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;