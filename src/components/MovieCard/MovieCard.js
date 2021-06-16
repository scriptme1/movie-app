import React from 'react';
import { MovieImage } from './MovieCard.styles';
import { Link } from 'react-router-dom';

const MovieCard = ({ image, movieId, clickable, movieName, play }) => {
  return (
    <div>
      {clickable && !play ? (
        <Link
          to={{
            pathname: `/movies/${movieId}`,
            movieName: `${movieName}`,
          }}
        >
          <MovieImage src={image} alt="moviethumb" />
        </Link>
      ) : (
        <Link to={{ pathname: `/movie/${movieId}` }}>
          <MovieImage src={image} alt="moviethumb" />
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
