import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../config';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      await axios
        .get(
          `${API_URL}movie/${resource}?api_key=${API_KEY}&language=en-US&page=1`
        )
        .then((response) => {
          setResources(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
