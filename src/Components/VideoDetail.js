import React from "react";
import { Container, Card } from "react-bootstrap";

const VideoDetail = ({ videoInfo }) => {
  return (
    <Container id="player">
      <Card className="p-4">
        <h4>{unescape(videoInfo.snippet.title)}</h4>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoInfo.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="align-self-center"
        ></iframe>
        <p className="pt-4">{videoInfo.snippet.description}</p>
      </Card>
    </Container>
  );
};

export default VideoDetail;
