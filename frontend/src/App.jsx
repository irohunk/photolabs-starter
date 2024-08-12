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
  const [favPhotos, setFavPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Check if there are any favorite photos
  // const isFavPhotoExist = favPhotos.length > 0;

  const toggleModal = (photo) => {
    if (photo) {
      setSelectedPhoto(photo);
      setIsModalVisible(true);
    } else {
      setSelectedPhoto(null);
      setIsModalVisible(false);
    }
  };

  const onToggleFavourite = (photo, isFav) => {
    setFavPhotos((prevFavPhotos) => {
      const updatedFavPhotos = !prevFavPhotos.includes(photo.id)
        ? [...prevFavPhotos, photo.id]
        : prevFavPhotos.filter(favPhoto => favPhoto !== photo.id);
      
      console.log('Updated favorite photos:', updatedFavPhotos);
      return updatedFavPhotos;
    });
  };
  
  const closeModal = () => {
    setIsModalVisible(false);
  }
  return (
    <div className="App">
      {/* <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList toggleModal={toggleModal} /> */}
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        favPhotos={favPhotos}
        toggleModal={toggleModal}
        onToggleFavourite={onToggleFavourite}
      />

      {selectedPhoto && isModalVisible && (
        <PhotoDetailsModal 
          isVisible={isModalVisible} 
          onClose={closeModal} 
          photo={selectedPhoto} 
          onToggleFavourite={onToggleFavourite} // Pass the toggle function to the modal
          favPhotos={favPhotos} // Pass the favorite photos to the modal
        />
      )}
    </div>
  );
};

export default App;