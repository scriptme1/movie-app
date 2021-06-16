import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async (movieId) => {
    setError(false);
    setLoading(true);
    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();
      //console.log("Movie ID", result);
      //console.log("Movie Credits", creditsResult);
      const directors = creditsResult.crew.filter(
        (member) => member.job === 'Director'
      );
      setState({
        ...result,
        actors: creditsResult.cast,
        directors,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (localStorage.movieId) {
      setState(JSON.parse(localStorage.movieId));
    } else {
      fetchData(movieId);
    }
  }, [movieId]);
  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);
  return [state, loading, error];
};
