import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from '../../images/no_image.jpg';
import { StyledActor } from './Season.styles';

const Season = ({ season, tvShowId }) => {
  return (
    <StyledActor>
      <Link
        to={{
          pathname: `/tvshow/${tvShowId}/${season.season_number}/${season.id}`,
        }}
      >
        <img
          src={
            season.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${season.poster_path}`
              : noImage
          }
          alt="actor"
          loading="lazy"
        />
        <span className="actor-name"> Season {season.season_number}</span>
        <span className="actor-character">
          No of Episodes: {season.episode_count}
        </span>
      </Link>
    </StyledActor>
  );
};

Season.propTypes = {
  season: PropTypes.object,
};
export default Season;
