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

const ContentItem = ({ item, onWatchVideo }) => {
  // If the item has a topics array, render as a section with bullet points
  if (item.topics) {
    return (
      <div className="content-item">
        <div className="item-number">{item.id}</div>
        <div className="item-content">
          <h4 className="item-title">{item.title}</h4>
          <ul className="item-topics">
            {item.topics.map((topic, idx) => (
              <li key={idx} className="item-topic">
                {getTopicTitle(topic)}
                <div className="topic-actions">
                  <button className="topic-btn video-btn" onClick={() => onWatchVideo && onWatchVideo(getTopicTitle(topic))}>
                    Watch video <span className="btn-time">(2 minutes)</span>
                  </button>
                  <button className="topic-btn slides-btn">View Slides <span className="btn-time">(5 minutes)</span></button>
                </div>
              </li>
            ))}
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