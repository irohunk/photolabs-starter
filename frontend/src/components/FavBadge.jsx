import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isFavPhotoExist} />
      {isFavPhotoExist && (
        <div className="fav-badge__count">
          <span>1</span> {/* Placeholder for the count of liked photos */}
        </div>
      )}
    </div>
  ) 
};

export default FavBadge;