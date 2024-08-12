import React, {useState} from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation


const App = () => {
  console.log('Rendering App')
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

  const isFavourite = (id) => {
    return favPhotos.includes(id)
  }

  const toggleFavourite = (id) => {
    setFavPhotos((prevFavPhotos) => {
      const updatedFavPhotos = !prevFavPhotos.includes(id)
        ? [...prevFavPhotos, id]
        : prevFavPhotos.filter(favPhoto => favPhoto !== id);
      
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
        // favPhotos={favPhotos}
        toggleModal={toggleModal}
        onToggleFavourite={toggleFavourite}
        favCount={favPhotos.length}
        isFavourite={isFavourite}
      />

      {selectedPhoto && isModalVisible && (
        <PhotoDetailsModal 
          isVisible={isModalVisible} 
          onClose={closeModal} 
          photo={selectedPhoto} 
          onToggleFavourite={toggleFavourite} // Pass the toggle function to the modal
          // favPhotos={favPhotos} // Pass the favorite photos to the modal
          isFavourite={isFavourite}
          favourites={favPhotos.length}
        />
      )}
    </div>
  );
};

export default App;