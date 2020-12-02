import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";
import Api from "./Components/Api";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("react redux");
  }, []);

  const onVideoSelection = (video) => {
    console.log("from app", video);
    setSelectedVideo(video);
  };

  const onTermSubmit = async (term) => {
    if (!term) {
      term = "react redux";
    }
    const response = await Api.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(null);
  };

  return (
    <div className="App">
      <Container>
        <Search onSumbmit={onTermSubmit} />
        <Row>
          {selectedVideo ? (
            <Col className="lg-7 mb-4">
              <VideoDetail videoInfo={selectedVideo} />
            </Col>
          ) : (
            ""
          )}
          <Col className={`${selectedVideo} ? lg-5:''`}>
            <VideoList onVideoSelection={onVideoSelection} items={videos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
