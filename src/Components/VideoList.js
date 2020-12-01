import React from "react";
import Video from "./Video";
const VideoList = ({ items, onVideoSelection }) => {
  const videos = items.map((video) => (
    <div key={video.id.videoId}>
      <Video onVideoSelection={onVideoSelection} video={video} />
    </div>
  ));
  return <section>{videos}</section>;
};

export default VideoList;
