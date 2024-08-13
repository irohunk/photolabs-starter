import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicSelect }) => {
  return (
    <div className="topic-list__item"
      onClick={() => onTopicSelect(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;