import React from 'react';
import './CareerSection.css';

const CareerSection: React.FC = () => {
  const careerValues = [
    {
      id: 'innovation',
      icon: '💡',
      title: '혁신',
      description: '미래를 선도하는 창의적 사고'
    },
    {
      id: 'trust',
      icon: '🤝',
      title: '신뢰',
      description: '고객과 함께 성장하는 파트너십'
    },
    {
      id: 'excellence',
      icon: '⭐',
      title: '탁월함',
      description: '최고의 기술력과 전문성'
    },
    {
      id: 'sustainability',
      icon: '🌱',
      title: '지속가능',
      description: '환경과 미래를 생각하는 경영'
    }
  ];

  const recruitingPositions = [
    {
      id: 1,
      department: '토목사업부',
      position: '토목설계 엔지니어',
      type: '정규직',
      location: '서울',
      deadline: '2024.12.15'
    },
    {
      id: 2,
      department: '에너지사업부',
      position: '신재생에너지 엔지니어',
      type: '정규직',
      location: '서울/울산',
      deadline: '2024.12.20'
    },
    {
      id: 3,
      department: '스마트시티사업부',
      position: 'IT 솔루션 개발자',
      type: '정규직',
      location: '서울',
      deadline: '2024.12.25'
    }
  ];

  return (
    <section className="career-section">
      <div className="career-section__container">
        {/* Section Header */}
        <div className="career-section__header">
          <span className="career-section__label">04</span>
          <h2 className="career-section__title">
            <span className="career-section__title-en">CAREER</span>
            <span className="career-section__title-ko">인재채용</span>
          </h2>
          <p className="career-section__subtitle">
            태영설비기술사사무소와 함께 성장할 인재를 찾습니다
          </p>
        </div>

        {/* Career Hero */}
        <div className="career-hero">
          <div className="career-hero__image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Team collaboration"
            />
            <div className="career-hero__overlay">
              <div className="career-hero__content">
                <h3 className="career-hero__title">
                  함께 만들어가는<br />
                  지속가능한 미래
                </h3>
                <p className="career-hero__text">
                  태영설비기술사사무소는 오랜 경험과 전문성으로<br />
                  건축설비 설계 분야를 선도해왔습니다.<br />
                  함께 성장하며 전문가로 발전할 인재를 기다립니다.
                </p>
                <div className="career-hero__stats">
                  <div className="career-stat">
                    <span className="career-stat__value">20년+</span>
                    <span className="career-stat__label">전문 경력</span>
                  </div>
                  <div className="career-stat">
                    <span className="career-stat__value">350+</span>
                    <span className="career-stat__label">완료 프로젝트</span>
                  </div>
                  <div className="career-stat">
                    <span className="career-stat__value">100%</span>
                    <span className="career-stat__label">고객 만족도</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="career-values">
          <h3 className="career-values__title">태영인의 핵심가치</h3>
          <div className="career-values__grid">
            {careerValues.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h4 className="value-card__title">{value.title}</h4>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiting Positions */}
        <div className="career-recruiting">
          <h3 className="career-recruiting__title">현재 채용중인 포지션</h3>
          <div className="career-recruiting__list">
            {recruitingPositions.map((position) => (
              <div key={position.id} className="recruit-card">
                <div className="recruit-card__header">
                  <span className="recruit-card__department">{position.department}</span>
                  <span className="recruit-card__deadline">~ {position.deadline}</span>
                </div>
                <h4 className="recruit-card__position">{position.position}</h4>
                <div className="recruit-card__meta">
                  <span className="recruit-card__type">{position.type}</span>
                  <span className="recruit-card__location">{position.location}</span>
                </div>
                <button className="recruit-card__apply">
                  지원하기
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <button className="career-recruiting__more">
            전체 채용공고 보기
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Career Benefits */}
        <div className="career-benefits">
          <h3 className="career-benefits__title">복지 & 혜택</h3>
          <div className="career-benefits__grid">
            <div className="benefit-item">
              <span className="benefit-item__icon">🏥</span>
              <span className="benefit-item__text">건강검진 및 의료비 지원</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-item__icon">📚</span>
              <span className="benefit-item__text">자기계발 교육비 지원</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-item__icon">🏖️</span>
              <span className="benefit-item__text">연차 및 리프레시 휴가</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-item__icon">👨‍👩‍👧‍👦</span>
              <span className="benefit-item__text">가족돌봄 지원제도</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-item__icon">🏠</span>
              <span className="benefit-item__text">주택자금 대출 지원</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-item__icon">🎓</span>
              <span className="benefit-item__text">자녀 학자금 지원</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;