import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={onClose}
      >
        <img className='photo-details-modal__close-button' src={closeSymbol} alt="close" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
