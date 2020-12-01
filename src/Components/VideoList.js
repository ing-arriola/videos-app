import React from "react";
import Video from "./Video";
const VideoList = ({ items }) => {
  const videos = items.map((video) => (
    <div key={video.id.videoId}>
      <Video video={video} />
    </div>
  ));
  return <section>{videos}</section>;
};

export default VideoList;
