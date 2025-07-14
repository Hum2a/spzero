import React from 'react';

const ContentItem = ({ item }) => {
  // If the item has a topics array, render as a section with bullet points
  if (item.topics) {
    return (
      <div className="content-item">
        <div className="item-number">{item.id}</div>
        <div className="item-content">
          <h4 className="item-title">{item.title}</h4>
          <ul className="item-topics">
            {item.topics.map((topic, idx) => (
              <li key={idx} className="item-topic">{topic}</li>
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