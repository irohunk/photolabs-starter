import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import TopicList from 'components/TopicList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  
  const [favPhotos, setFavPhotos] = useState([]);

  // Check if there are any favorite photos
  const isFavPhotoExist = favPhotos.length > 0;

  const toggleModal = (photo) => {
    console.log('Toggled modal for', photo);
  };

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} topics={topics} />
      <PhotoList photos={photos} toggleModal={toggleModal} />
    </div>
  );
};

export default HomeRoute;