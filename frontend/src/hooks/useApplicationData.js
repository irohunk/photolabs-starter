import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer, useEffect } from "react";

const initialState = {
  isModalVisible: false,
  favPhotos: [],
  selectedPhoto: null,
  photoData: [],
  topicData: []
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTO_DATA':
    return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
    return { ...state, topicData: action.payload };
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

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }))
  }, []);

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
    closeModal,
    state
  };
};

export default useApplicationData;