import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

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
    state,
    onTopicSelect
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        onTopicSelect={onTopicSelect}
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
          onToggleFavourite={toggleFavourite}
          isFavourite={isFavourite}
          favourites={favPhotos.length}
        />
      )}
    </div>
  );
};

export default App;