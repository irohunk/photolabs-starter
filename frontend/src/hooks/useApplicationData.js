import { useState } from "react";

const useApplicationData = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [favPhotos, setFavPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
  };

  return {
    isModalVisible,
    favPhotos,
    selectedPhoto,
    toggleModal,
    isFavourite,
    toggleFavourite,
    closeModal
  };
};

export default useApplicationData;