import React from 'react';
import './NavigationButton.css';

interface NavigationButtonProps {
  label: string;
  direction: 'left' | 'right';
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ label, direction, onClick }) => {
  return (
    <button
      className={`navigation-button navigation-button--${direction}`}
      onClick={onClick}
      aria-label={`Navigate to ${label}`}
    >
      <span className="navigation-button__label">{label}</span>
      <svg
        className="navigation-button__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === 'left' ? (
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
};

export default NavigationButton;