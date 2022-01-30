import React from 'react';
// import { Loader } from './LoadingSpinner.styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { Container } from './LoadingSpinner.styles';
const LoadingSpinner = () => {
  return (
    <Container>
      <Loader type="Bars" color="#00BFFF" height={50} width={50} />
    </Container>
  ); 
};

export default LoadingSpinner;
