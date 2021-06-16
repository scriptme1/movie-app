import React from 'react';

import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from '../../images/no_image.jpg';
import { StyledActor } from './Episode.styles';

const Episode = ({ season, tvShowId }) => {
  return (
    <StyledActor>
      <Link
        to={{
          pathname: `/tv/${tvShowId}/${season.season_number}/${season.episode_number}`,
        }}
      >
        <img
          src={
            season.still_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${season.still_path}`
              : noImage
          }
          alt="actor"
          loading="lazy"
        />
        <span className="actor-name"> Episode {season.episode_number}</span>
        <span className="actor-character"> {season.name}</span>
      </Link>
    </StyledActor>
  );
};

export default Episode;
