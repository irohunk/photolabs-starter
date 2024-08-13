import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = ({ isFavPhotoExist, favCount, topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        onTopicSelect={onTopicSelect}
      />
      <FavBadge isFavPhotoExist={isFavPhotoExist} favCount={favCount} />
    </div>
  );
}

export default TopNavigationBar;