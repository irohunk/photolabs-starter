import React from "react";
import "../styles/PhotoListItem.scss";


// const props = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
  const { photo } = props;

  return (
    <div className="PhotoListItem">
      <img src={photo.imageSource} />
      <img src={photo.profile} />
      <h2>{photo.username}</h2>
      <h2>{photo.location.city}, {photo.location.country}</h2>
    </div>
  )
};

export default PhotoListItem;
