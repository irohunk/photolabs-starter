import React, {useState} from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Sample state to manage favorite photos
  // const [favPhotos, setFavPhotos] = useState([]);

  // Check if there are any favorite photos
  // const isFavPhotoExist = favPhotos.length > 0;

  const toggleModal = (photo) => {
    setIsModalVisible(!isModalVisible);
  };

  // const [photoData, setPhotoData] = useState(photos);
  // const [topicData, setTopicData] = useState(topics);

  return (
    <div className="App">
      {/* <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList toggleModal={toggleModal} /> */}
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        toggleModal={toggleModal}
      />

      <PhotoDetailsModal 
        isVisible={isModalVisible} 
        onClose={toggleModal} 
      />
    </div>
  );
};

export default App;