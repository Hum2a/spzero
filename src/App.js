import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ModulesSection from './components/ModulesSection';
import ContentSection from './components/ContentSection';
import { modules } from './data/modules';
import { useModuleSelection } from './hooks/useModuleSelection';

const DEMO_TOPICS = ['History of Money', 'Time Value of Money', 'Digital Dollars & Stablecoins'];
const DEMO_ACTIONS = ['video', 'slides'];
const DEMO_TOTAL = DEMO_TOPICS.length * DEMO_ACTIONS.length;

function App() {
  const { selectedModule, handleModuleClick } = useModuleSelection();

  // Demo progress for Module 1, Section 1 (6 actions: 3 topics x 2 actions)
  const [demoActions, setDemoActions] = useState({}); // { 'History of Money:video': true, ... }

  // Section progress: { moduleId: { sectionId: true/false, ... }, ... }
  const [sectionProgress, setSectionProgress] = useState({});

  // Mark a section as complete/incomplete
  const toggleSectionComplete = (moduleId, sectionId, totalSections) => {
    setSectionProgress(prev => {
      const mod = prev[moduleId] || {};
      const newVal = !mod[sectionId];
      const updated = { ...mod, [sectionId]: newVal };
      return { ...prev, [moduleId]: updated };
    });
  };

  // Mark a module as complete/incomplete (for other modules, not Module 1 demo)
  const toggleModuleComplete = (moduleId, totalSections) => {
    setSectionProgress(prev => {
      const allComplete = false;
      const updated = {};
      for (let i = 1; i <= totalSections; i++) {
        updated[i] = allComplete;
      }
      return { ...prev, [moduleId]: updated };
    });
  };

  // Demo: handle action for Module 1, Section 1
  const handleDemoAction = (topic, action) => {
    setDemoActions(prev => {
      const key = `${topic}:${action}`;
      if (prev[key]) return prev; // already done
      const updated = { ...prev, [key]: true };
      return updated;
    });
  };

  // Calculate demo progress for Module 1, Section 1
  const demoSection1Progress = Math.round(
    (DEMO_TOPICS.reduce((acc, topic) => acc + DEMO_ACTIONS.filter(action => demoActions[`${topic}:${action}`]).length, 0) / DEMO_TOTAL) * 100
  );

  // Module progress: for Module 1, use demoSection1Progress scaled to 17%; for others, 0
  const moduleProgress = {
    1: Math.round((demoSection1Progress / 100) * 17),
    2: 0,
    3: 0
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
          demoActions={demoActions}
          handleDemoAction={handleDemoAction}
        />
      </div>
    </div>
  );
}

export default App;
