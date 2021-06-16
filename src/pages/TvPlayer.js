import React from 'react';
import { useParams } from 'react-router-dom';

const TvPlayer = () => {
  React.useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'hidden';
  }, []);

  const { tvId } = useParams();
  const { seasonNumber } = useParams();
  const { episodeNumber } = useParams();

  const url = `https://fsapi.xyz/tv-tmdb/${tvId}-${seasonNumber}-${episodeNumber}`;
  console.log(url);
  return (
    <div>
      <iframe
        sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        src={url}
        frameBorder={0}
        allowFullScreen={true}
        title={'tv'}
        style={{
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
        }}
      />
    </div>
  );
};

export default TvPlayer;
