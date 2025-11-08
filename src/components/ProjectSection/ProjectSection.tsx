import React, { useState } from 'react';
import './ProjectSection.css';

const ProjectSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      id: 1,
      title: '친환경 에너지 솔루션 프로젝트',
      type: '신재생 에너지',
      location: '서울 강남구',
      year: '2024',
      status: '진행중',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      title: '스마트 빌딩 통합 관리 시스템',
      type: '스마트시티',
      location: '경기 성남시',
      year: '2024',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: '도심 공기질 개선 프로젝트',
      type: '도시재생',
      location: '인천 연수구',
      year: '2023',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      title: '고속도로 휴게소 친환경 시설',
      type: '교통 인프라',
      location: '경부고속도로',
      year: '2023',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    // 추가 프로젝트 (더보기 후 표시)
    {
      id: 5,
      title: '대형 상업시설 HVAC 시스템',
      type: '스마트시티',
      location: '서울 송파구',
      year: '2023',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 6,
      title: '태양광 발전소 설계 및 시공',
      type: '신재생 에너지',
      location: '전남 해남군',
      year: '2022',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 7,
      title: '지하철역 환기 시스템 개선',
      type: '교통 인프라',
      location: '서울 지하철 2호선',
      year: '2022',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 8,
      title: '공공 도서관 에너지 절감 프로젝트',
      type: '도시재생',
      location: '부산 해운대구',
      year: '2022',
      status: '완료',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  // 초기에는 4개만 표시, 더보기 클릭 시 전체 표시
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  const handleToggleProjects = () => {
    setShowAll(!showAll);

    // 접기 시 섹션 상단으로 스크롤
    if (showAll) {
      const section = document.getElementById('project');
      if (section) {
        const headerHeight = 80;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

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
        <div className={`project-section__grid ${showAll ? 'expanded' : ''}`}>
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                animation: showAll && index >= 4
                  ? `fadeInUp 0.6s ease-out ${(index - 4) * 0.1}s both`
                  : 'none'
              }}
            >
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

        {/* Toggle Button */}
        <div className="project-section__footer">
          <button
            className="project-section__more-btn"
            onClick={handleToggleProjects}
          >
            {showAll ? (
              <>
                접기
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 12L10 7L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            ) : (
              <>
                더 많은 프로젝트 보기
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 5L10 15M5 10L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
