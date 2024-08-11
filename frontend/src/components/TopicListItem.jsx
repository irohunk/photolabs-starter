import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ( { slug, label }) => {
  return (
    <div className="topic-list__item">
      <a href={`/topics/${slug}`}>
        <span>{label}</span>
      </a>
    </div>
  );
};

export default TopicListItem;