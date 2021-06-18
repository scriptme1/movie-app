import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';

import bgVideo from '../video/world.mp4';
function Home() {
  useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
  }, []);

  // const [state, setState] = useState([]);

  return (
    <div style={{ backgroundColor: '#353535' }}>
      <Banner videoFile={bgVideo} Header={'MOVIES'} />
    </div>
  );
}

export default Home;
