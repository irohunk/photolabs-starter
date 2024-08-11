import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import HomeRoute from 'routes/HomeRoute';

import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  // Sample state to manage favorite photos
  // const [favPhotos, setFavPhotos] = useState([]);

  // Check if there are any favorite photos
  // const isFavPhotoExist = favPhotos.length > 0;

  // const toggleModal = (photo) => {
  //   console.log('Toggled modal for', photo);
  // };

  return (
    <div className="App">
      {/* <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList toggleModal={toggleModal} /> */}
      <HomeRoute />
    </div>
  );
};

export default App;