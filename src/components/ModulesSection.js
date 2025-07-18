import React from 'react';
import ModuleTile from './ModuleTile';

const ModulesSection = ({ modules, selectedModule, onModuleClick, moduleProgress, toggleModuleComplete, sectionProgress }) => {
  return (
    <section className="modules-section">
      {/* <h2 className="section-title">Choose Your Learning Path</h2>
      <div className="modules-info-box">
        <p className="modules-info">4 Modules: 10 lessons for per module</p>
        <p className="modules-info">Long journey: 3 hours of learning time</p>
        <p className="modules-info">Short journey: 1 hour of quizzes</p>
      </div> */}

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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ModulesSection; 