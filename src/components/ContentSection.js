import React, { useState } from 'react';
import ContentItem from './ContentItem';
import VideoModal from './VideoModal';

const VIDEO_MAP = {
  'History of Money': '/videos/Historyofmoney.mp4',
  'Time Value of Money': '/videos/BasicsofEconomics.mp4',
  'Digital Dollars & Stablecoins': '/videos/Cryptocurrency.mp4',
};

const ContentSection = ({ selectedModule, modules, sectionProgress, toggleSectionComplete }) => {
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
            <ContentItem item={item} onWatchVideo={handleWatchVideo} />
            {isSectionFormat && (
              <div className="section-progress-bar-container">
                <div className="section-progress-bar" style={{ width: sectionState[item.id] ? '100%' : '0%' }} />
                <span className="section-progress-label">{sectionState[item.id] ? 'Complete' : 'Incomplete'}</span>
                <button
                  className="section-complete-btn"
                  onClick={() => toggleSectionComplete(selectedModule, item.id, totalSections)}
                >
                  {sectionState[item.id] ? 'Mark as incomplete' : 'Mark as complete'}
                </button>
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