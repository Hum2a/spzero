import React from 'react';
import ModuleTile from './ModuleTile';

const ModulesSection = ({ modules, selectedModule, onModuleClick }) => {
  return (
    <section className="modules-section">
      <h2 className="section-title">Choose Your Learning Path</h2>
      <div className="modules-grid">
        {modules.map((module) => (
          <ModuleTile
            key={module.id}
            module={module}
            isActive={selectedModule === module.id}
            onClick={onModuleClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ModulesSection; 