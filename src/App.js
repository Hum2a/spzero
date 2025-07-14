import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ModulesSection from './components/ModulesSection';
import ContentSection from './components/ContentSection';
import { modules } from './data/modules';
import { useModuleSelection } from './hooks/useModuleSelection';

function App() {
  const { selectedModule, handleModuleClick } = useModuleSelection();

  // Progress state: { moduleId: percent, ... }
  const [moduleProgress, setModuleProgress] = useState({});
  // Section progress: { moduleId: { sectionId: true/false, ... }, ... }
  const [sectionProgress, setSectionProgress] = useState({});

  // Mark a section as complete/incomplete
  const toggleSectionComplete = (moduleId, sectionId, totalSections) => {
    setSectionProgress(prev => {
      const mod = prev[moduleId] || {};
      const newVal = !mod[sectionId];
      const updated = { ...mod, [sectionId]: newVal };
      // Calculate percent complete for module
      const completed = Object.values(updated).filter(Boolean).length;
      setModuleProgress(mp => ({ ...mp, [moduleId]: Math.round((completed / totalSections) * 100) }));
      return { ...prev, [moduleId]: updated };
    });
  };

  // Mark a module as complete/incomplete
  const toggleModuleComplete = (moduleId, totalSections) => {
    setSectionProgress(prev => {
      const allComplete = !(moduleProgress[moduleId] === 100);
      const updated = {};
      for (let i = 1; i <= totalSections; i++) {
        updated[i] = allComplete;
      }
      setModuleProgress(mp => ({ ...mp, [moduleId]: allComplete ? 100 : 0 }));
      return { ...prev, [moduleId]: updated };
    });
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <ModulesSection
          modules={modules}
          selectedModule={selectedModule}
          onModuleClick={handleModuleClick}
          moduleProgress={moduleProgress}
          toggleModuleComplete={toggleModuleComplete}
          sectionProgress={sectionProgress}
        />
        <ContentSection
          selectedModule={selectedModule}
          modules={modules}
          sectionProgress={sectionProgress}
          toggleSectionComplete={toggleSectionComplete}
        />
      </div>
    </div>
  );
}

export default App;
