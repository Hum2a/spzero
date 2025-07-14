import React, { useState } from 'react';
import ContentItem from './ContentItem';
import VideoModal from './VideoModal';

const VIDEO_MAP = {
  'History of Money': '/videos/Historyofmoney.mp4',
  'Time Value of Money': '/videos/BasicsofEconomics.mp4',
  'Digital Dollars & Stablecoins': '/videos/Cryptocurrency.mp4',
};

const DEMO_TOPICS = ['History of Money', 'Time Value of Money', 'Digital Dollars & Stablecoins'];
const DEMO_ACTIONS = ['video', 'slides'];
const DEMO_TOTAL = DEMO_TOPICS.length * DEMO_ACTIONS.length;

const ContentSection = ({ selectedModule, modules, sectionProgress, toggleSectionComplete, demoActions, handleDemoAction }) => {
  const [videoModal, setVideoModal] = useState({ open: false, src: '', title: '' });

  if (!selectedModule) return null;

  const currentModule = modules.find(m => m.id === selectedModule);
  const isSectionFormat = currentModule?.content?.[0]?.topics !== undefined;
  const totalSections = currentModule?.content.length || 0;
  const sectionState = sectionProgress[selectedModule] || {};
  const percent = totalSections
    ? Math.round((Object.values(sectionState).filter(Boolean).length / totalSections) * 100)
    : 0;

  // Only allow video modal for the three topics in Evolution & Forms of Money
  const handleWatchVideo = (topic) => {
    if (selectedModule === 1 && VIDEO_MAP[topic]) {
      setVideoModal({ open: true, src: VIDEO_MAP[topic], title: topic });
    }
  };

  // Demo: Section 1 progress
  let demoSection1Progress = 0;
  if (selectedModule === 1) {
    demoSection1Progress = Math.round(
      (DEMO_TOPICS.reduce((acc, topic) => acc + DEMO_ACTIONS.filter(action => demoActions[`${topic}:${action}`]).length, 0) / DEMO_TOTAL) * 100
    );
  }

  return (
    <section className="content-section">
      <VideoModal
        open={videoModal.open}
        onClose={() => setVideoModal({ open: false, src: '', title: '' })}
        videoSrc={videoModal.src}
        title={videoModal.title}
      />
      <div className="content-header">
        <h2 className="selected-module-title">
          MODULE {selectedModule} – {currentModule?.title}
        </h2>
        {isSectionFormat && (
          <div className="module-progress-bar-container" style={{ marginTop: 12 }}>
            <div className="module-progress-bar" style={{ width: percent + '%' }} />
            <span className="module-progress-label">{percent}% complete</span>
          </div>
        )}
      </div>
      <div className="content-list">
        {currentModule?.content.map((item) => (
          <div key={item.id} style={{ position: 'relative' }}>
            <ContentItem
              item={item}
              onWatchVideo={handleWatchVideo}
              demoActions={demoActions}
              handleDemoAction={handleDemoAction}
              moduleId={selectedModule}
              sectionId={item.id}
            />
            {/* Demo: Section 1 progress bar */}
            {selectedModule === 1 && item.id === 1 && (
              <div className="demo-section-progress-bar-container">
                <div className="demo-section-progress-bar" style={{ width: demoSection1Progress + '%' }} />
                <span className="demo-section-progress-label">{demoSection1Progress}% complete</span>
              </div>
            )}

            {/* Add Take quiz CTA below Evolution & Forms of Money (id: 1) in Module 1 */}
            {selectedModule === 1 && item.id === 1 && (
              <div className="evolution-quiz-btn-container">
                <button className="evolution-quiz-btn">Take quiz</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {isSectionFormat && (
        <div className="take-quiz-container">
          <button className="take-quiz-btn">Take quiz</button>
        </div>
      )}
    </section>
  );
};

export default ContentSection; 