import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import photos from './mocks/photos';
import topics from './mocks/topics';

import './App.scss';



const App = () => {
  console.log('Rendering App')

  const {
    isModalVisible,
    favPhotos,
    selectedPhoto,
    toggleModal,
    isFavourite,
    toggleFavourite,
    closeModal
  } = useApplicationData();

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