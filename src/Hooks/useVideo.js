import { useEffect, useState } from "react";
import Api from "../Components/Api";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search("react redux");
  }, []);

  const search = async (term) => {
    if (!term) {
      term = "react redux";
    }
    const response = await Api.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
