import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";
import Api from "./Components/Api";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import { Container, Col } from "react-bootstrap";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelection = (video) => {
    console.log("from app", video);
    setSelectedVideo(video);
  };

  const onTermSubmit = async (term) => {
    const response = await Api.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  return (
    <div className="App">
      <Container>
        <Search onSumbmit={onTermSubmit} />
        {selectedVideo ? (
          <Col>
            <VideoDetail videoInfo={selectedVideo} />
          </Col>
        ) : (
          <div>Loading</div>
        )}
        <Col>
          <VideoList onVideoSelection={onVideoSelection} items={videos} />
        </Col>
      </Container>
    </div>
  );
}

export default App;
