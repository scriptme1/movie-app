import React from 'react';
// import PropTypes from 'prop-types';
import { StyledMovieInfo } from './TvSeasonInfo.styles';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from '../../images/no_image.jpg';
import TvCard from '../TvCard/TvCard';

const TvSeasonInfo = ({ tvshow }) => {
  return (
    <StyledMovieInfo backdrop={tvshow.poster_path}>
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
          <h1>{tvshow.name}</h1>
          <h3>PLOT</h3>
          <p>{tvshow.overview}</p>
        </div>
      </div>
    </StyledMovieInfo>
  );
};

export default TvSeasonInfo;
