import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, StyledGridContent } from './Grid.styles';

const Grid = ({ header, children }) => {
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
};
Grid.propTypes = {
  header: PropTypes.string,
};
export default Grid;
