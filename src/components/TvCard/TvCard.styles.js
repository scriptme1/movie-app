import styled from 'styled-components';

export const TvImage = styled.img`
  /* width: 500px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s;
  box-sizing: border-box;
  border-radius: 20px; */

  width: 500px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s;
  box-sizing: border-box;
  border-radius: 20px;

  :hover {
    transform: translateY(-15px) scale(1.1);
    -webkit-transform: translateY(-15px) scale(1.1);
    -moz-transform: translateY(-15px) scale(1.1);
    -webkit-box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4);
    box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4);
  }
`;
