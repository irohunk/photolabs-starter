import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  if (!photo) return null;

  const { user, location, urls, similar_photos } = photo;

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={closeModal}>
        <img src={closeSymbol} alt="close" />
      </button>

      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={urls.full}
          alt="Selected photo"
        />
      </div>

      <div className="photo-details-modal__details">
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={user.profile}
            alt={`${user.name}'s profile`}
          />
          <div className="photo-details-modal__photographer-info">
            <span className="photo-details-modal__header">{user.name}</span>
            <span className="photo-details-modal__photographer-location">
              {location.city}, {location.country}
            </span>
          </div>
        </div>
      </div>

      <div className="photo-details-modal__similar-photos">
        <span className="photo-details-modal__header">Similar Photos</span>
        <div className="photo-details-modal__images">
          {similar_photos ? (
            Object.values(similar_photos).map((similarPhoto, index) => (
              <div key={index} className="photo-details-modal__similar-photo">
                <img
                  className="photo-details-modal__image"
                  src={similarPhoto.urls.regular}
                  alt={`Similar photo ${index + 1}`}
                />
                <div className="photo-details-modal__similar-photo-details">
                  <img
                    className="photo-details-modal__photographer-profile"
                    src={similarPhoto.user.profile}
                    alt={`${similarPhoto.user.name}'s profile`}
                  />
                  <div className="photo-details-modal__photographer-info">
                    <span className="photo-details-modal__header">
                      {similarPhoto.user.name}
                    </span>
                    <span className="photo-details-modal__photographer-location">
                      {similarPhoto.location.city}, {similarPhoto.location.country}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No similar photos available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
