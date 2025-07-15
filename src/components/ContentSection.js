import React, { useState } from 'react';
import ContentItem from './ContentItem';
import Modal from './VideoModal';

const VIDEO_MAP = {
  'History of Money': '/videos/Historyofmoney.mp4',
  'Time Value of Money': '/videos/BasicsofEconomics.mp4',
  'Digital Dollars & Stablecoins': '/videos/Cryptocurrency.mp4',
};

const SLIDES_MAP = {
  'History of Money': [
    '/historySlides/1.jpg',
    '/historySlides/2.jpg',
    '/historySlides/3.jpg',
    '/historySlides/4.jpg',
  ],
  'Digital Dollars & Stablecoins': [
    '/digitalSlides/5.jpg',
    '/digitalSlides/6.jpg',
    '/digitalSlides/7.jpg',
    '/digitalSlides/8.jpg',
    '/digitalSlides/9.jpg',
    '/digitalSlides/10.jpg',
  ],
};

const DEMO_TOPICS = ['History of Money', 'Time Value of Money', 'Digital Dollars & Stablecoins'];
const DEMO_ACTIONS = ['video', 'slides'];
const DEMO_TOTAL = DEMO_TOPICS.length * DEMO_ACTIONS.length;

const ContentSection = ({ selectedModule, modules, sectionProgress, toggleSectionComplete, demoActions, handleDemoAction }) => {
  const [videoModal, setVideoModal] = useState({ open: false, src: '', title: '' });
  const [slidesModal, setSlidesModal] = useState({ open: false, slides: [], title: '' });
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleViewSlides = (topic) => {
    if (selectedModule === 1 && SLIDES_MAP[topic]) {
      setSlidesModal({ open: true, slides: SLIDES_MAP[topic], title: topic });
      setCurrentSlide(0);
    }
  };
  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slidesModal.slides.length - 1));
  };
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
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
      <Modal
        open={videoModal.open}
        onClose={() => setVideoModal({ open: false, src: '', title: '' })}
        title={videoModal.title}
      >
        <video controls autoPlay className="video-modal-player">
          <source src={videoModal.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
      <Modal
        open={slidesModal.open}
        onClose={() => setSlidesModal({ open: false, slides: [], title: '' })}
        title={slidesModal.title + ' Slides'}
        progress={{ current: currentSlide + 1, total: slidesModal.slides.length }}
      >
        {slidesModal.slides.length > 0 && (
          <div className="slides-story-viewer">
            <button
              className="slide-nav-btn left"
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              &#8592;
            </button>
            <img
              src={slidesModal.slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="slide-image"
            />
            <button
              className="slide-nav-btn right"
              onClick={handleNextSlide}
              disabled={currentSlide === slidesModal.slides.length - 1}
              aria-label="Next slide"
            >
              &#8594;
            </button>
            <div className="slide-indicator">
              {currentSlide + 1} / {slidesModal.slides.length}
            </div>
          </div>
        )}
      </Modal>
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
              onViewSlides={handleViewSlides}
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
      {/* Render summary table for all modules */}
      {currentModule.summaryTable && (
        <div className="module-summary-table-container">
          <h3 className="module-summary-table-title">Summary</h3>
          <table className="module-summary-table">
            <thead>
              <tr>
                {currentModule.summaryTable.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentModule.summaryTable.rows.map((row, idx) => (
                <tr key={idx}>
                  {row.map((cell, cidx) => (
                    <td key={cidx}>{cell}</td>
                  ))}
                </tr>
              ))}
              <tr className="module-summary-table-total">
                <td colSpan={currentModule.summaryTable.headers.length - 1} style={{ textAlign: 'right', fontWeight: 700 }}>Total time</td>
                <td style={{ fontWeight: 700 }}>{currentModule.summaryTable.totalTime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {isSectionFormat && (
        <div className="take-quiz-container">
          <button className="take-quiz-btn">Long Journey</button>
          <button className="take-quiz-btn" style={{ marginLeft: 16 }}>Short Journey</button>
        </div>
      )}
    </section>
  );
};

export default ContentSection; 