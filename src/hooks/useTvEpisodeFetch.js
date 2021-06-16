import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';

export const useTvEpisodeFetch = (tvId, seasonNo) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (tvId, seasonNo) => {
    setError(false);
    setLoading(true);
    try {
      const endpoint = `${API_URL}tv/${tvId}/season/${seasonNo}?api_key=${API_KEY}`;
      // /tv/{tv_id}/season/{season_number}
      const result = await (await fetch(endpoint)).json();
      // const creditsEndpoint = `${API_URL}tv/${tvId}/credits?api_key=${API_KEY}`;
      // const creditsResult = await (await fetch(creditsEndpoint)).json();
      //console.log("Movie ID", result);
      //console.log("Movie Credits", creditsResult);
      // const directors = creditsResult.crew.filter(
      //   (member) => member.job === 'Director'
      // );
      setState({
        ...result,
        // actors: creditsResult.cast,
        // directors,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (localStorage.tvId && localStorage.seasonNo) {
      setState(JSON.parse(localStorage.tvId));
      setState(JSON.parse(localStorage.seasonNo));
    } else {
      fetchData(tvId, seasonNo);
    }
  }, [tvId, seasonNo]);
  useEffect(() => {
    localStorage.setItem(tvId, JSON.stringify(state));
    localStorage.setItem(seasonNo, JSON.stringify(state));
  }, [tvId, seasonNo, state]);
  return [state, loading, error];
};
