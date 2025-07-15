import React from 'react';

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo">
            {/* Placeholder SVG logo */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#176D6A" />
              <path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="16" r="4" fill="#fff" />
            </svg>
          </div>
          <span className="header-lifesmart">LifeSmart</span>
        </div>
        <div className="header-right">
          <span className="header-title">SPZero x LifeSmart</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 