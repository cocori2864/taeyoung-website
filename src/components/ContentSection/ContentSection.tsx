import React from 'react';
import './ContentSection.css';

interface ContentSectionProps {
  sectionNumber: string;
  title: string;
  description: string;
  hasAnimation?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  sectionNumber,
  title,
  description,
  hasAnimation = false
}) => {
  return (
    <section className="content-section">
      <div className="content-section__container">
        {/* Rotated section number on the side */}
        <div className="content-section__number">
          <span className="content-section__number-text">{sectionNumber}</span>
        </div>

        {/* Main content area */}
        <div className="content-section__main">
          <h2 className="content-section__title">{title}</h2>
          <p className="content-section__description">{description}</p>

          {/* Animated element placeholder - would use Lottie in production */}
          {hasAnimation && (
            <div className="content-section__animation">
              {/* SVG Animation with dashed outline effect */}
              <svg
                className="content-section__svg"
                width="400"
                height="300"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="50"
                  y="50"
                  width="300"
                  height="200"
                  stroke={`var(--color-primary)`}
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  className="animated-stroke"
                />
                <circle
                  cx="200"
                  cy="150"
                  r="60"
                  stroke={`var(--color-primary)`}
                  strokeWidth="2"
                  fill="none"
                  className="animated-fill"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Side decoration or additional content */}
        <div className="content-section__side">
          <div className="content-section__decoration" />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;