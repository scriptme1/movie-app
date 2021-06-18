import styled, { keyframes } from 'styled-components';

export const TvCards = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FourColGrid = styled.div``;


export const GridContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 720px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`;

const animateGrid = keyframes`
     from {
      opacity:0;
    }
        to {
      opacity:1;
    }
`;

export const GridElement = styled.div`
  margin: 0 40px 40px 0;
  background: #353535;
  max-height: 430px;
  max-width: 300px;
  animation: ${animateGrid} 0.5s;
  overflow: hidden;
  border-radius: 5%;

  /* For a 4-column grid */
  &:nth-child(4n + 4) {
    margin-right: 0;
  }

  @media screen and (max-width: 720px) {
    &:nth-child(2n + 2) {
      margin-right: 0 auto;
      padding-top: 10px;
    }
  }

  @media (max-width: 480px) {
    margin-right: 0 auto;
    padding-top: 10px;
    max-height: 700px;
  }
`;
