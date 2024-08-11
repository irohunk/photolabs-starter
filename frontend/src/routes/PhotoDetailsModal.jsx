import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  if (!photo) return null;

  const { user, location, urls } = photo;

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={closeModal}>
        <img src={closeSymbol} alt="close" />
      </button>
      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={user.profile} alt={`${user.name}'s profile`} />
          <div className="photo-details-modal__photographer-info">
            <span>{user.name}</span>
            <span className="photo-details-modal__photographer-location">{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={urls.full} alt="Selected photo" />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
