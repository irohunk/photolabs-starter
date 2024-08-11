// frontend/src/components/PhotoList.jsx

import React from 'react';
import PhotoListItem from './PhotoListItem'; 
import '../styles/PhotoList.scss';
import photos from 'mocks/photos';

const PhotoList = ({ photos, toggleModal, onToggleFavourite }) => {
  return(
  <div className="photo-list">
    {photos.map(photo => (
      <PhotoListItem 
        key={photo.id} 
        photo={photo}
        toggleModal={toggleModal}
        onToggleFavourite={onToggleFavourite} />
    ))}
  </div>
  )
};

export default PhotoList;