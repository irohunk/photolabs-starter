import React from "react";

import "../styles/PhotoListItem.scss";


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

const PhotoListItem = () => {
  return (
    <div className="PhotoListItem">
      <img src={props.imageSource} />
      <img src={props.profile} />
      <h2>{props.username}</h2>
      <h2>{props.location.city}, {props.location.country}</h2>
    </div>
  )
};

export default PhotoListItem;
