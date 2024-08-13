import { useReducer, useEffect } from "react";

const initialState = {
  isModalVisible: false,
  favPhotos: [],
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  photoByTopicData: [],
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

  const onTopicSelect = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
  }

  const toggleModal = (photo) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: photo });
  };

  const isFavourite = (id) => {
    return state.favPhotos.includes(id);
  };

  const toggleFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return {
    isModalVisible: state.isModalVisible,
    favPhotos: state.favPhotos,
    selectedPhoto: state.selectedPhoto,
    toggleModal,
    isFavourite,
    toggleFavourite,
    closeModal,
    state,
    onTopicSelect
  };
};

export default useApplicationData;