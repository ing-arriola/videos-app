import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";
import Api from "./Components/Api";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import { Container, Col, Row } from "react-bootstrap";
import NavigationBar from "./Components/NavigationBar";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("react redux");
  }, []);

  const onVideoSelection = (video) => {
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
            <VideoList onVideoSelection={onVideoSelection} items={videos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
