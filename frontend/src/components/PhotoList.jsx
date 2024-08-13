// frontend/src/components/PhotoList.jsx

import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
// import photos from 'mocks/mockphotos';

const PhotoList = (props) => {
  return (
    <div className="photo-list">
      {props.photos.map(photo => {
        const selected = props.isFavourite(photo.id);
      
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            showModal={() => props.toggleModal(photo)}
            toggleFavourite={() => props.onToggleFavourite(photo.id)}
            selected={selected} />
        )
      })}
    </div>
  )
};

export default PhotoList;