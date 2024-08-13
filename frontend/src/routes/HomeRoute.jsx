import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, isFavourite, toggleModal, onToggleFavourite } = props

  return (
    <div className="home-route">
      <TopNavigationBar 
        favCount={props.favCount}
        topics={topics} 
      />
      <PhotoList 
        photos={photos} 
        toggleModal={toggleModal} 
        onToggleFavourite={onToggleFavourite}
        isFavourite={isFavourite}
      />
    </div>
  );
};

export default HomeRoute;