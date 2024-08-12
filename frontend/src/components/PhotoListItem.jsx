import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleModal, onToggleFavourite, favPhotos }) => {
  const { user, location, urls } = photo;
  
  // State to handle the favorite status
  // const [isFav, setIsFav] = useState(false);

  // Function to toggle the favorite status
  const handleToggle = () => {
    // const newFavStatus = !isFav;
    // setIsFav(newFavStatus);
    onToggleFavourite(photo);
  };


  return (
    <div className="photo-listitem">
      <div className="photo-container">
        <PhotoFavButton selected={favPhotos.includes(photo.id)} handleToggle={handleToggle} />
        <img 
          className="photo-list__image" 
          src={urls.regular}
          alt={location.city}
          onClick={() => toggleModal(photo)} 
        />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={user.name} />
        <div className="photo-list__user-info">
          <span className="photo-list__user-details">{user.name}</span>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;