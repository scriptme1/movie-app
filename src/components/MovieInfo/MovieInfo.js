import React from 'react';
import PropTypes from 'prop-types';

import { StyledMovieInfo } from './MovieInfo.styles';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from '../../images/no_image.jpg';
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieInfo = ({ movie }) => {
  function nestedDataToString(nestedData) {
    let nestedArray = [],
      resultString;
    if (nestedData !== undefined) {
      nestedData.forEach(function (item) {
        nestedArray.push(item.name);
      });
    }
    resultString = nestedArray.join(', '); // array to string
    return resultString;
  }

  let genres = movie.genres,
    genresList = nestedDataToString(genres);
  // console.log(genresList);
  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieCard
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : noImage
            }
            clickable={true}
            play={true}
            movieId={movie.id}
          />
        </div>
        <div className="movieinfo-text">
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-director">
            <div>
              <h3>IMDB RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map((item) => (
                <p key={item.credit_id}>{item.name}</p>
              ))}
            </div>
          </div>
          <div className="genres">
            <h3>GENRES</h3>
            <p>
              <span>{genresList}</span>
            </p>
          </div>
        </div>
      </div>
    </StyledMovieInfo>
  );
};
MovieInfo.propsTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};
export default MovieInfo;
