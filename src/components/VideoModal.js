import React from 'react';

const Modal = ({ open, onClose, title, children, progress }) => {
  if (!open) return null;
  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={e => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>&times;</button>
        {progress && progress.total > 1 && (
          <div className="modal-status-bar">
            {Array.from({ length: progress.total }).map((_, idx) => (
              <div
                key={idx}
                className={`modal-status-segment${idx < progress.current ? ' filled' : ''}`}
              />
            ))}
          </div>
        )}
        {/* <h3 className="video-modal-title">{title}</h3> */}
        {children}
      </div>
    </div>
  );
};

export default Modal; 