import React, {useState} from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // Sample state to manage favorite photos
  // const [favPhotos, setFavPhotos] = useState([]);

  // Check if there are any favorite photos
  // const isFavPhotoExist = favPhotos.length > 0;

  const toggleModal = (photo) => {
    setSelectedPhoto(photo);
    console.log('Toggled modal for', photo);
  };

  // const [photoData, setPhotoData] = useState(photos);
  // const [topicData, setTopicData] = useState(topics);

  const closeModal = () => {
    setSelectedPhoto(null);
  }

  return (
    <div className="App">
      {/* <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList toggleModal={toggleModal} /> */}
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        toggleModal={toggleModal}
      />

      {selectedPhoto && (
        <div className="photo-details-modal">
          <button 
            className="photo-details-modal__close-button"
            onClick={closeModal}
          >
            <span className="closeSymbol" alt="close">X</span>
          </button>
          {/* Placeholder for additional content in the modal */}
        </div>
      )}
    </div>
  );
};

export default App;