import React, { useEffect } from 'react';
import './ProjectModal.css';

interface Project {
  id: number;
  title: string;
  type: string;
  location: string;
  year: string;
  status: string;
  image: string;
  description?: string;
  features?: string[];
  client?: string;
  duration?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="project-modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="project-modal">
        <button className="project-modal__close" onClick={onClose} aria-label="닫기">
          ✕
        </button>

        <div className="project-modal__content">
          {/* Image */}
          <div className="project-modal__image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-modal__image"
            />
            {project.status === '진행중' && (
              <span className="project-modal__badge">진행중</span>
            )}
          </div>

          {/* Details */}
          <div className="project-modal__details">
            <div className="project-modal__header">
              <div className="project-modal__meta">
                <span className="project-modal__type">{project.type}</span>
                <span className="project-modal__year">{project.year}</span>
              </div>
              <h2 className="project-modal__title">{project.title}</h2>
              <p className="project-modal__location">📍 {project.location}</p>
            </div>

            {/* Info Grid */}
            <div className="project-modal__info-grid">
              <div className="project-modal__info-item">
                <span className="project-modal__info-label">발주처</span>
                <span className="project-modal__info-value">
                  {project.client || '비공개'}
                </span>
              </div>
              <div className="project-modal__info-item">
                <span className="project-modal__info-label">공사기간</span>
                <span className="project-modal__info-value">
                  {project.duration || '6개월'}
                </span>
              </div>
              <div className="project-modal__info-item">
                <span className="project-modal__info-label">진행상태</span>
                <span className="project-modal__info-value">{project.status}</span>
              </div>
            </div>

            {/* Description */}
            <div className="project-modal__section">
              <h3 className="project-modal__section-title">프로젝트 개요</h3>
              <p className="project-modal__description">
                {project.description ||
                  '친환경 에너지 솔루션을 적용한 혁신적인 프로젝트입니다. 최신 기술과 지속 가능한 설계를 통해 에너지 효율을 극대화하고 환경 영향을 최소화하였습니다.'}
              </p>
            </div>

            {/* Features */}
            <div className="project-modal__section">
              <h3 className="project-modal__section-title">주요 특징</h3>
              <ul className="project-modal__features">
                {(project.features || [
                  '최신 친환경 설비 기술 적용',
                  '에너지 효율 30% 향상',
                  '스마트 모니터링 시스템 구축',
                  '유지보수 비용 절감'
                ]).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
