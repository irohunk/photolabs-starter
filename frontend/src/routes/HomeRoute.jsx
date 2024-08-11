import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  
  const [favPhotos, setFavPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Check if there are any favorite photos
  const isFavPhotoExist = favPhotos.length > 0;

  const onToggleFavourite = (photo, isFav) => {
    setFavPhotos((prevFavPhotos) => {
      if (isFav) {
        return [...prevFavPhotos, photo];
      } else {
        return prevFavPhotos.filter(favPhoto => favPhoto.id !== photo.id);
      }
    });
  };

  const toggleModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () =>  {
    setSelectedPhoto(null);
  };

  return (
    <div className="home-route">
      <TopNavigationBar 
        isFavPhotoExist={isFavPhotoExist} 
        favCount={favPhotos.length}
        topics={topics} 
      />
      <PhotoList 
        photos={photos} 
        toggleModal={toggleModal} 
        onToggleFavourite={onToggleFavourite}
      />
      {selectedPhoto && (
        <PhotoDetailsModal 
          photo={selectedPhoto} 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
};

export default HomeRoute;