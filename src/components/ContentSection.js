import React from 'react';
import ContentItem from './ContentItem';

const ContentSection = ({ selectedModule, modules }) => {
  if (!selectedModule) return null;

  const currentModule = modules.find(m => m.id === selectedModule);

  return (
    <section className="content-section">
      <div className="content-header">
        <h2 className="selected-module-title">
          MODULE {selectedModule} – {currentModule?.title}
        </h2>
      </div>
      <div className="content-list">
        {currentModule?.content.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection; 