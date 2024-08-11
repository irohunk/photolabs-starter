import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  // Assuming `isFavPhotoExist` is managed in a parent component like App.js or directly here
  const [favPhotos, setFavPhotos] = useState([]);

  // Check if there are any favorite photos
  const isFavPhotoExist = favPhotos.length > 0;

  const toggleModal = (photo) => {
    console.log('Toggled modal for', photo);
  };

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList toggleModal={toggleModal} />
    </div>
  );
};

export default HomeRoute;