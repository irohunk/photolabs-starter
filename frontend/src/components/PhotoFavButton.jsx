import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ selected, handleToggle }) {
  const [isFav, setIsFav] = useState(selected);

  const handleClick = () => {
    setIsFav(!isFav);
    handleToggle();
    console.log('Icon clicked!'); // This is just for testing
  };

  return (
    <div className={`photo-list__fav-icon ${isFav ? 'active' : ''}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav}/>    
      </div>
    </div>
  );
}
export default PhotoFavButton;