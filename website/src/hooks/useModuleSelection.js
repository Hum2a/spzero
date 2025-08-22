import { useState } from 'react';

export const useModuleSelection = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleClick = (moduleId) => {
    setSelectedModule(moduleId);
  };

  const clearSelection = () => {
    setSelectedModule(null);
  };

  return {
    selectedModule,
    handleModuleClick,
    clearSelection
  };
}; 