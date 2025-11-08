import React, { useState, useEffect } from 'react';
import './HeroSection.css';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  link: string;
  linkText: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: SlideData[] = [
    {
      id: 1,
      title: '세계를 향한 도전',
      subtitle: 'Challenge Toward the Global Market',
      description: '초일류 종합엔지니어링 기업 태영의 세계를 향한 도전은 계속됩니다',
      backgroundImage: '/images/hero-1.jpg',
      link: '/company/vision',
      linkText: '비전 보기'
    },
    {
      id: 2,
      title: '성장과 혁신',
      subtitle: 'Growth and Innovation',
      description: '1957년 설립 이후 대한민국 엔지니어링의 역사를 만들어가고 있습니다',
      backgroundImage: '/images/hero-2.jpg',
      link: '/company/history',
      linkText: '연혁 보기'
    },
    {
      id: 3,
      title: '미래를 설계하다',
      subtitle: 'Designing the Future',
      description: '지속 가능한 미래를 위한 친환경 기술과 스마트 솔루션을 제공합니다',
      backgroundImage: '/images/hero-3.jpg',
      link: '/business/projects',
      linkText: '프로젝트 보기'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="hero">
      <div className="hero__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__slide ${index === currentSlide ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.backgroundImage})`
            }}
          >
            <div className="hero__content">
              <div className="container">
                <div className="hero__text">
                  <h1 className="hero__title">
                    {slide.title}
                  </h1>
                  <p className="hero__subtitle">
                    {slide.subtitle}
                  </p>
                  <p className="hero__description">
                    {slide.description}
                  </p>
                  <a href={slide.link} className="hero__cta">
                    {slide.linkText}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="hero__controls">
        <button
          className="hero__nav hero__nav--prev"
          onClick={handlePrevSlide}
          aria-label="이전 슬라이드"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="hero__nav hero__nav--next"
          onClick={handleNextSlide}
          aria-label="다음 슬라이드"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="hero__indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          >
            <span className="hero__indicator-fill"></span>
          </button>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero__scroll">
        <span>Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;