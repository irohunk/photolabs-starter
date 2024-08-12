import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favCount }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!favCount} selected={favCount} />
      {!!favCount && (
        <div className="fav-badge__count">
          <span>{favCount}</span> {/* Placeholder for the count of liked photos */}
        </div>
      )}
    </div>
  ) 
};

export default FavBadge;