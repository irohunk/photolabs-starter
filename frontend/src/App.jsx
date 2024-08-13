import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// import photos from './dont_use_mocks/photos';
// import topics from './dont_use_mocks/topics';

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
    closeModal,
    state
  } = useApplicationData();

  return (
    <div className="App">
      {/* <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList toggleModal={toggleModal} /> */}
      <HomeRoute 
        // photos={photos} 
        photos={state.photoData} 
        topics={state.topicData} 
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