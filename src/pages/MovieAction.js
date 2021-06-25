import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import MovieList from '../components/MovieList/MovieList';
import bgVideo from '../video/avengers.mp4';

const MovieAction = () => {
  useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
  }, []);

  const [state, setState] = useState([]);

  return (
    <div style={{ backgroundColor: '#353535' }}>
      <Banner videoFile={bgVideo} Header={'ACTION MOVIES'} />
      <MovieList state={state} setState={setState} genres={'action'} />
    </div>
  );
};

export default MovieAction;
