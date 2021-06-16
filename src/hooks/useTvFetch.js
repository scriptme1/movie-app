import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';

export const useTvFetch = (tvId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async (tvId) => {
    setError(false);
    setLoading(true);
    try {
      const endpoint = `${API_URL}tv/${tvId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}tv/${tvId}/credits?api_key=${API_KEY}`;
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
    if (localStorage.tvId) {
      setState(JSON.parse(localStorage.tvId));
    } else {
      fetchData(tvId);
    }
  }, [tvId]);
  useEffect(() => {
    localStorage.setItem(tvId, JSON.stringify(state));
  }, [tvId, state]);
  return [state, loading, error];
};
