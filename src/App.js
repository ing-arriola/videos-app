import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useVideo from "./Hooks/useVideo";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import { Container, Col, Row } from "react-bootstrap";
import NavigationBar from "./Components/NavigationBar";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, onTermSubmit] = useVideo();

  useEffect(() => {
    setSelectedVideo("");
  }, [videos]);

  return (
    <div className="App">
      <Container>
        <NavigationBar onTermSubmit={onTermSubmit} />

        <Row className="mt-5 pt-5 ">
          {selectedVideo ? (
            <Col className="lg-7 mb-4">
              <VideoDetail videoInfo={selectedVideo} />
            </Col>
          ) : (
            ""
          )}
          <Col className={`${selectedVideo} ? lg-5:''`}>
            <VideoList onVideoSelection={setSelectedVideo} items={videos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
