import React from 'react';
import ModuleTile from './ModuleTile';

const ModulesSection = ({ modules, selectedModule, onModuleClick, moduleProgress, toggleModuleComplete, sectionProgress }) => {
  return (
    <section className="modules-section">
      <h2 className="section-title">Choose Your Learning Path</h2>
      <div className="modules-grid">
        {modules.map((module) => {
          const isSectionFormat = module.content?.[0]?.topics !== undefined;
          const totalSections = module.content.length;
          const percent = moduleProgress[module.id] || 0;
          return (
            <div key={module.id} style={{ position: 'relative' }}>
              <ModuleTile
                module={module}
                isActive={selectedModule === module.id}
                onClick={onModuleClick}
              />
              <div className="module-progress-bar-container">
                <div className="module-progress-bar" style={{ width: percent + '%' }} />
                <span className="module-progress-label">{percent}% complete</span>
              </div>
              {isSectionFormat && (
                <button
                  className="module-complete-btn"
                  onClick={() => toggleModuleComplete(module.id, totalSections)}
                >
                  {percent === 100 ? 'Mark all as incomplete' : 'Mark all as complete'}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ModulesSection; 