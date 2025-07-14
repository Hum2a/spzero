import React from 'react';

const VideoModal = ({ open, onClose, videoSrc, title }) => {
  if (!open) return null;
  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={e => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>&times;</button>
        <h3 className="video-modal-title">{title}</h3>
        <video controls autoPlay className="video-modal-player">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal; 