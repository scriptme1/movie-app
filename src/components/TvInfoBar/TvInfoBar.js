import React from 'react';
import FontAwesome from 'react-fontawesome';
// import { calcTime, convertMoney } from '../../helper';
import { StyledMovieInfoBar } from './TvInfoBar.styles';
import PropTypes from 'prop-types';

const MovieInfoBar = ({ popularity, noSeasons, noEpisodes }) => {
  return (
    <StyledMovieInfoBar>
      <div className="movieinfobar-content">
        <FontAwesome
          className="fa-users"
          size="2x"
          name="users"
          style={{ color: '#00fa9a' }}
        />
        <span className="movieinfobar-info">Popularity: {popularity}</span>
      </div>
      <div className="movieinfobar-content">
        <FontAwesome
          className="fa-tv"
          size="2x"
          name="tv"
          style={{ color: '#00fa9a' }}
        />
        <span className="movieinfobar-info">No of Seasons: {noSeasons}</span>
      </div>
      <div className="movieinfobar-content">
        <FontAwesome
          className="fa-film"
          size="2x"
          name="film"
          style={{ color: '#00fa9a' }}
        />
        <span className="movieinfobar-info">No of Episodes: {noEpisodes}</span>
      </div>
    </StyledMovieInfoBar>
  );
};
MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};
export default MovieInfoBar;
