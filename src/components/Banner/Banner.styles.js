import styled from 'styled-components';

export const Section = styled.div`
  height: 100vh;
  overflow: hidden;
  /*   
  position: absolute;
  width: 100vw;
  display: block; */
  /* flex-wrap: wrap;
  flex-direction: row; */
  /* justify-content: center; */
  /* 
  > * {
    flex: 1 1 100px;
  } */
`;

export const TextDiv = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 9999;
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 100px;
  margin-top: 150px;

  @media (max-width: 768px) {
    padding-top: 50px;
    margin-top: 100px;
  }
`;

export const Bg = styled.div`
  background-color: #333;
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100vh;
  opacity: 0.3;
`;

export const H1 = styled.h1`
  opacity: 1;
  color: #baf733;
  font: Corporate ABQ;
  font-size: 50px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const P = styled.p`
  opacity: 1;
  color: #baf733;
  font: Corporate ABQ;
  width: auto;
  margin: 0 auto;
  font-size: 18px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 9px;
    width: auto;
  }
`;
export const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
`;

export const VideoBg = styled.video`
 
   height: 100%; 
  width: 100%;
  left: 50%;
  top: 50%;
  object-fit: cover;
  padding: none;

  

 
`;
export const Button = styled.button`
  opacity: 1;
  color: #baf733;

  background-color: #222;
  width: 20%;
  height: 50px;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 20px;
  opacity: 0.7;
  text-transform: uppercase;

  &:hover {
    background-color: #333;
    box-shadow: 1px 1px 10px grey;
    opacity: 1;
    /* color: orangered; */
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    width: 30%;
    height: 35px;
    font-size: 7px;
    margin-top: 10px;
    border-radius: 12px;
  }
`;
