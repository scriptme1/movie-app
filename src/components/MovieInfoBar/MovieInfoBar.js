import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helper';
import { StyledMovieInfoBar } from './MovieInfoBar.styles';
import PropTypes from 'prop-types';

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <StyledMovieInfoBar>
      <div className="movieinfobar-content">
        <FontAwesome
          className="fa-time"
          size="2x"
          name="clock-o"
          style={{ color: '#00fa9a' }}
        />
        <span className="movieinfobar-info">Running time {calcTime(time)}</span>
      </div>
      <div className="movieinfobar-content">
        <FontAwesome
          className="fa-budget"
          size="2x"
          name="money"
          style={{ color: '#00fa9a' }}
        />
        <span className="movieinfobar-info">
          Budget: {budget !== 0 ? convertMoney(budget) : 'No Data'}
        </span>
      </div>
      <div className="movieinfobar-content">
        <FontAwesome
          className="fa-revenue"
          size="2x"
          name="ticket"
          style={{ color: '#00fa9a' }}
        />
        <span className="movieinfobar-info">
          Revenue: {revenue !== 0 ? convertMoney(revenue) : 'Unknown'}
        </span>
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
