import React from "react";

const VideoDetail = ({ videoInfo }) => {
  console.log(videoInfo);
  return <div>{videoInfo.snippet.title}</div>;
};

export default VideoDetail;
