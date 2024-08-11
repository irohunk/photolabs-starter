import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const photo = props.photo;
  const user = photo.username;
  const location = photo.location;

  // State to handle the favorite status
  const [isFav, setIsFav] = useState(false);

  // Function to toggle the favorite status
  const handleToggle = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="photo-listitem">
      <div className="photo-container">
        <PhotoFavButton selected={isFav} handleToggle={handleToggle} />
        <img className="photo-list__image" src={photo.imageSource} alt="" onClick={() => props.toggleModal(props.photo)} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt="" />
        <div className="photo-list__user-info">
          <span className="photo-list__user-details">{user}</span>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
