import { useEffect, useState } from "react";
import Api from "../Components/Api";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search("jaime javier arriola suarez ");
  }, []);

  const search = async (term) => {
    if (!term) {
      term = "jaime javier arriola suarez";
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
