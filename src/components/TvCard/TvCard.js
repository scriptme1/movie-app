import React from 'react';
import { TvImage } from './TvCard.styles';
import { Link } from 'react-router-dom';

const TvCard = ({ image, tvId, clickable, tvName, play }) => {
  return (
    <div>
      {clickable && !play ? (
        <Link
          to={{
            pathname: `/tv/${tvId}`,
            tvName: `${tvName}`,
          }}
        >
          <TvImage src={image} alt="moviethumb" />
        </Link>
      ) : (
        // <Link to={{ pathname: `/tvshow/${tvId}` }}>
        <TvImage src={image} alt="moviethumb" />
        // </Link>
      )}
    </div>
  );
};

export default TvCard;
