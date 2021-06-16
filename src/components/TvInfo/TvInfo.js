import React from 'react';
import PropTypes from 'prop-types';
import { StyledMovieInfo } from './TvInfo.styles';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from '../../images/no_image.jpg';
import TvCard from '../TvCard/TvCard';

const TvInfo = ({ tvshow }) => {
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

  let genres = tvshow.genres,
    genresList = nestedDataToString(genres);
  // console.log(genresList);
  return (
    <StyledMovieInfo backdrop={tvshow.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <TvCard
            image={
              tvshow.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tvshow.poster_path}`
                : noImage
            }
            clickable={true}
            play={true}
            movieId={tvshow.id}
          />
        </div>
        <div className="movieinfo-text">
          <h1>{tvshow.title}</h1>
          <h3>PLOT</h3>
          <p>{tvshow.overview}</p>

          <div className="rating-director">
            <div>
              <h3>IMDB RATING</h3>
              <div className="score">{tvshow.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{tvshow.created_by.length > 1 ? 'S' : ''}</h3>
              {tvshow.created_by.map((person) => (
                <p key={person.credit_id}>{person.name}</p>
              ))}
            </div>
            <div className="homepage">
              <h3>HOMEPAGE</h3>
              <p>{tvshow.homepage}</p>
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
TvInfo.propsTypes = {
  tvshow: PropTypes.object,
  directors: PropTypes.array,
};
export default TvInfo;
