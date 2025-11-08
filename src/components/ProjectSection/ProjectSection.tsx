import React from 'react';
import './ProjectSection.css';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: '새만금 신공항 건설사업',
      location: '전라북도 부안군',
      type: '공항 인프라',
      year: '2024',
      status: '진행중',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    {
      id: 2,
      title: '영덕 해상풍력 발전단지',
      location: '경상북도 영덕군',
      type: '신재생 에너지',
      year: '2024',
      status: '진행중',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: '부산 에코델타시티 스마트시티',
      location: '부산광역시',
      type: '스마트시티',
      year: '2024',
      status: '진행중',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      title: '인천공항 제4활주로 건설',
      location: '인천광역시',
      type: '공항 인프라',
      year: '2023',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1184&q=80'
    },
    {
      id: 5,
      title: '제주 탐라 해상풍력 발전',
      location: '제주특별자치도',
      type: '신재생 에너지',
      year: '2023',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1088&q=80'
    },
    {
      id: 6,
      title: '경부고속도로 스마트 톨링',
      location: '서울-부산 구간',
      type: '교통 인프라',
      year: '2023',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 7,
      title: '한강 수변도시 재생사업',
      location: '서울특별시',
      type: '도시재생',
      year: '2023',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 8,
      title: '울산 부유식 해상풍력',
      location: '울산광역시',
      type: '신재생 에너지',
      year: '2023',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <section id="project" className="project-section">
      <div className="project-section__container">
        {/* Section Header */}
        <div className="project-section__header">
          <span className="project-section__label">02</span>
          <h2 className="project-section__title">
            <span className="project-section__title-en">PROJECT</span>
            <span className="project-section__title-ko">프로젝트</span>
          </h2>
          <p className="project-section__subtitle">
            태영설비기술사사무소가 만들어가는 안전하고 효율적인 공간
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-section__filters">
          <button className="project-filter project-filter--active">전체</button>
          <button className="project-filter">신재생 에너지</button>
          <button className="project-filter">교통 인프라</button>
          <button className="project-filter">스마트시티</button>
          <button className="project-filter">도시재생</button>
        </div>

        {/* Projects Grid */}
        <div className="project-section__grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                />
                <div className="project-card__overlay">
                  <div className="project-card__overlay-content">
                    <span className="project-card__year">{project.year}</span>
                    <button className="project-card__view-btn">
                      자세히 보기
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                {project.status === '진행중' && (
                  <span className="project-card__badge">진행중</span>
                )}
              </div>
              <div className="project-card__content">
                <div className="project-card__meta">
                  <span className="project-card__type">{project.type}</span>
                  <span className="project-card__location">{project.location}</span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="project-section__footer">
          <button className="project-section__more-btn">
            더 많은 프로젝트 보기
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 5L10 15M5 10L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;