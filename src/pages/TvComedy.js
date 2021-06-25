import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import TvList from '../components/TV/TvList';
import VideoBg from '../video/mandalorian.mp4';

// import axios from 'axios';
// import { API_URL, API_KEY } from '../config';

const TvComedy = () => {
  useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
  }, []);

  const [state, setState] = useState([]);

  return (
    <>
      <Banner videoFile={VideoBg} Header={'COMEDY SERIES'} />

      <TvList state={state} setState={setState} genres={'comedy'} />
    </>
  );
};

export default TvComedy;
