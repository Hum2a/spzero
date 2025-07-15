import React from 'react';

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={e => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>&times;</button>
        <h3 className="video-modal-title">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Modal; 