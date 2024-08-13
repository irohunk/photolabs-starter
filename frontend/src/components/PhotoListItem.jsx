import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { user, location, urls } = props.photo;
  

  return (
    <div className="photo-list__item">
      <div className="photo-container">
        <PhotoFavButton selected={props.selected} onClick={props.toggleFavourite} />
        <img 
          className="photo-list__image" 
          src={urls.regular}
          alt={location.city}
          onClick={props.showModal} 
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