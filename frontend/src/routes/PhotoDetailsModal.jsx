import React from 'react';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose, onToggleFavourite, favPhotos }) => {
  if (!photo) return null;

  const { user, location, urls, similar_photos } = photo;

  const isFav = favPhotos.some(favPhoto => favPhoto.id === photo.id);

  const handleToggleFavourite = () => {
    onToggleFavourite(photo, !isFav);
  };

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={onClose}>
        <img src={closeSymbol} alt="close" />
      </button>

      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={urls.full}
          alt="Selected photo"
        />
        <button 
          className={`photo-details-modal__favourite-button ${isFav ? 'is-fav' : ''}`}
          onClick={handleToggleFavourite}
        >
          {isFav ? 'Unfavourite' : 'Favourite'}
        </button>
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
            <PhotoList 
              photos={Object.values(similar_photos)} 
              toggleModal={() => {}} // Disable modal toggle for similar photos
              onToggleFavourite={onToggleFavourite} // Pass the function here
              favPhotos={favPhotos}
            />
          ) : (
            <p>No similar photos available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;