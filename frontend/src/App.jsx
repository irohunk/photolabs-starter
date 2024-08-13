import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  console.log('Rendering App')
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [favPhotos, setFavPhotos] = useState([]);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);


  // const toggleModal = (photo) => {
  //   if (photo) {
  //     setSelectedPhoto(photo);
  //     setIsModalVisible(true);
  //   } else {
  //     setSelectedPhoto(null);
  //     setIsModalVisible(false);
  //   }
  // };

  // const isFavourite = (id) => {
  //   return favPhotos.includes(id)
  // }

  // const toggleFavourite = (id) => {
  //   setFavPhotos((prevFavPhotos) => {
  //     const updatedFavPhotos = !prevFavPhotos.includes(id)
  //       ? [...prevFavPhotos, id]
  //       : prevFavPhotos.filter(favPhoto => favPhoto !== id);
      
  //     return updatedFavPhotos;
  //   });
  // };
  
  // const closeModal = () => {
  //   setIsModalVisible(false);
  // }

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