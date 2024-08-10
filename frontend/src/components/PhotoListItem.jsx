import React from "react";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const photo = props.photo;
  const user = photo.username;
  const location = photo.location;

  return (
      <div className="photo-list__item" >
      <img className="photo-list__image" src={photo.imageSource} alt="" />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photo.profile} alt="" />
          <div className="photo-list__user-info">
            <span className="photo-list__user-details">{user}</span>
            <span className="photo-list__user-location" >{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
  )
};

export default PhotoListItem;
