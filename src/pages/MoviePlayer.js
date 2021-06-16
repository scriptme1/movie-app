import React from 'react';
// import Spinner from '../elements/Spinner/Spinner';

const MoviePlayer = (props) => {
  React.useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'hidden';
  }, []);

  return (
    <div>
      <iframe
        sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        src={`https://fsapi.xyz/tmdb-movie/${props.match.params.movieId}`}
        frameBorder={0}
        allowFullScreen={true}
        title={'movie'}
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

export default MoviePlayer;
