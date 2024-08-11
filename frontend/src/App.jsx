import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

import './App.scss';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const toggleModal = (photo) => {
    console.log('Toggled modal for', photo);
  };

  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList toggleModal={toggleModal} />
    </div>
  );
};

export default App;