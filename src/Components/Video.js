import React from "react";
import { Container, Media, ListGroup } from "react-bootstrap";
const Video = ({ video, onVideoSelection }) => {
  const videoRendered = (
    <ListGroup.Item className="hover" onClick={() => onVideoSelection(video)}>
      <Media className="py-3">
        <img
          width={160}
          height={90}
          className="align-self-start mr-3"
          src={video.snippet.thumbnails.medium.url}
          alt="Generic placeholder"
        />
        <Media.Body className="mx-auto my-auto">
          <p>{unescape(video.snippet.title)}</p>
        </Media.Body>
      </Media>
    </ListGroup.Item>
  );

  return (
    <Container>
      <ListGroup>{videoRendered}</ListGroup>
    </Container>
  );
};

export default Video;
