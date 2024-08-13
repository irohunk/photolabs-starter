import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer } from "react";

const initialState = {
  isModalVisible: false,
  favPhotos: [],
  selectedPhoto: null,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalVisible: !!action.payload,
        selectedPhoto: action.payload || null,
      };
      case 'TOGGLE_FAVOURITE':
        const isFavourite = state.favPhotos.includes(action.payload);
        return {
          ...state,
          favPhotos: isFavourite
          ? state.favPhotos.filter((id) => id !== action.payload)
          : [...state.favPhotos, action.payload],
        };
      case 'CLOSE_MODAL':
        return {
          ...state,
          isModalVisible: false,
        };
      default:
        return state;
  }
};


const useApplicationData = () => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [favPhotos, setFavPhotos] = useState([]);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (photo) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: photo });
  };

  // const toggleModal = (photo) => {
  //   if (photo) {
  //     setSelectedPhoto(photo);
  //     setIsModalVisible(true);
  //   } else {
  //     setSelectedPhoto(null);
  //     setIsModalVisible(false);
  //   }
  // };

  const isFavourite = (id) => {
    return state.favPhotos.includes(id);
  };

  // const isFavourite = (id) => {
  //   return favPhotos.includes(id)
  // }

  const toggleFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id});
  };

  // const toggleFavourite = (id) => {
  //   setFavPhotos((prevFavPhotos) => {
  //     const updatedFavPhotos = !prevFavPhotos.includes(id)
  //       ? [...prevFavPhotos, id]
  //       : prevFavPhotos.filter(favPhoto => favPhoto !== id);
      
  //     return updatedFavPhotos;
  //   });
  // };
  
  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  };

  // const closeModal = () => {
  //   setIsModalVisible(false);
  // };

  return {
    isModalVisible: state.isModalVisible,
    favPhotos: state.favPhotos,
    selectedPhoto: state.selectedPhoto,
    toggleModal,
    isFavourite,
    toggleFavourite,
    closeModal
  };
};

export default useApplicationData;