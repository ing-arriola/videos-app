import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";
import Api from "./Components/Api";
import VideoList from "./Components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
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
      <Search onSumbmit={onTermSubmit} />
      <VideoList items={videos} />
    </div>
  );
}

export default App;
