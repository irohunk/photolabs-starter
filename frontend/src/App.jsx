import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleModal = (photo) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPhoto(photo);
  };

  const props = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  
  const photos = [];
  photos.push(props);
  photos.push(props);
  photos.push(props);

  return (
    <div className="App">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} toggleModal={toggleModal} />
      ))}
      <PhotoFavButton />

      {/* Render the modal here if needed */}
      {isModalOpen && <div className="modal">Modal Content for {selectedPhoto?.username}</div>}
    </div>
  );
};

export default App;
