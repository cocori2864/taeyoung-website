import React from 'react';
import './ProjectSection.css';

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  year: number;
}

const ProjectSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: '베트남 떠이닌성 태양광 발전소',
      location: '베트남 떠이닌',
      category: '에너지',
      image: '/images/project-1.jpg',
      year: 2024
    },
    {
      id: 2,
      title: '일본 후쿠시마 풍력 발전단지',
      location: '일본 후쿠시마',
      category: '에너지',
      image: '/images/project-2.jpg',
      year: 2024
    },
    {
      id: 3,
      title: '서울 강남 스마트시티 프로젝트',
      location: '서울 강남구',
      category: '도시',
      image: '/images/project-3.jpg',
      year: 2023
    },
    {
      id: 4,
      title: '부산항 신항만 개발',
      location: '부산광역시',
      category: '교통',
      image: '/images/project-4.jpg',
      year: 2023
    }
  ];

  return (
    <section className="projects section">
      <div className="container">
        <div className="projects__header">
          <span className="projects__label">PROJECTS</span>
          <h2 className="projects__title">프로젝트</h2>
          <p className="projects__description">
            태영엔지니어링이 수행한 대표 프로젝트를 소개합니다
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div
                className="project-card__image"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundColor: '#e0e0e0'
                }}
              >
                <div className="project-card__overlay">
                  <span className="project-card__category">{project.category}</span>
                  <span className="project-card__year">{project.year}</span>
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__location">{project.location}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <a href="/business/projects" className="projects__more">
            더 많은 프로젝트 보기
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;