import React from 'react';

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo">
            <img src="/LifeSmart.png" alt="LifeSmart Logo" />
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