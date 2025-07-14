import React from 'react';
import './App.css';
import Header from './components/Header';
import ModulesSection from './components/ModulesSection';
import ContentSection from './components/ContentSection';
import { modules } from './data/modules';
import { useModuleSelection } from './hooks/useModuleSelection';

function App() {
  const { selectedModule, handleModuleClick } = useModuleSelection();

  return (
    <div className="App">
      <div className="container">
        <Header />
        <ModulesSection 
          modules={modules}
          selectedModule={selectedModule}
          onModuleClick={handleModuleClick}
        />
        <ContentSection 
          selectedModule={selectedModule}
          modules={modules}
        />
      </div>
    </div>
  );
}

export default App;
