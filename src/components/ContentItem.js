import React from 'react';

const getTopicTitle = (topic) => {
  // Split on en dash (–) or hyphen-minus (-), whichever comes first
  const enDashIdx = topic.indexOf('–');
  const hyphenIdx = topic.indexOf('-');
  let idx = -1;
  if (enDashIdx !== -1 && hyphenIdx !== -1) {
    idx = Math.min(enDashIdx, hyphenIdx);
  } else if (enDashIdx !== -1) {
    idx = enDashIdx;
  } else if (hyphenIdx !== -1) {
    idx = hyphenIdx;
  }
  return idx !== -1 ? topic.slice(0, idx).trim() : topic;
};

const ContentItem = ({ item, onWatchVideo, demoActions, handleDemoAction, moduleId, sectionId }) => {
  // If the item has a topics array, render as a section with bullet points
  const isDemo = moduleId === 1 && sectionId === 1;
  if (item.topics) {
    return (
      <div className="content-item">
        <div className="item-number">{item.id}</div>
        <div className="item-content">
          <h4 className="item-title">{item.title}</h4>
          <ul className="item-topics">
            {item.topics.map((topic, idx) => {
              const title = getTopicTitle(topic);
              const videoKey = `${title}:video`;
              const slidesKey = `${title}:slides`;
              return (
                <li key={idx} className="item-topic">
                  {title}
                  <div className="topic-actions">
                    <button
                      className={`topic-btn video-btn${isDemo && demoActions[videoKey] ? ' completed' : ''}`}
                      onClick={() => {
                        if (isDemo) handleDemoAction(title, 'video');
                        if (onWatchVideo) onWatchVideo(title);
                      }}
                    >
                      Watch video <span className="btn-time">(2 minutes)</span>
                      {isDemo && demoActions[videoKey] && <span className="topic-check">✔</span>}
                    </button>
                    <button
                      className={`topic-btn slides-btn${isDemo && demoActions[slidesKey] ? ' completed' : ''}`}
                      onClick={() => isDemo && handleDemoAction(title, 'slides')}
                    >
                      View Slides <span className="btn-time">(5 minutes)</span>
                      {isDemo && demoActions[slidesKey] && <span className="topic-check">✔</span>}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  // Fallback for old format (title/subtitle)
  return (
    <div className="content-item">
      <div className="item-number">{item.id}</div>
      <div className="item-content">
        <h4 className="item-title">{item.title}</h4>
        {item.subtitle && <p className="item-subtitle">{item.subtitle}</p>}
      </div>
    </div>
  );
};

export default ContentItem; 