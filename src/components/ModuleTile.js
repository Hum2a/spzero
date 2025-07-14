import React from 'react';

const ModuleTile = ({ module, isActive, onClick }) => {
  return (
    <div
      className={`module-tile ${isActive ? 'active' : ''}`}
      onClick={() => onClick(module.id)}
    >
      <div className="module-number">{module.id}</div>
      <h3 className="module-title">{module.title}</h3>
      <div className="arrow">↓</div>
    </div>
  );
};

export default ModuleTile; 