import React from 'react';
import {
  Section,
  Background,
  VideoBg,
  Bg,
  TextDiv,
  H1,
  P,
  Button,
} from './Banner.styles';



const Banner = ({ videoFile, Header }) => {
  return (
    <>
      <Section>
        <Background>
          <VideoBg autoPlay muted loop>
            <source src={videoFile} type="video/mp4" />
            <source src={videoFile} type="video/ogg" />
          </VideoBg>
        </Background>
        <Bg></Bg>
        <TextDiv>
          <H1>GET TO KNOW YOUR FAVORITE {Header}</H1>
          <P>Sign up with us and create your own {Header} collections </P>
          
            <Button>Explore {Header} </Button>
          
        </TextDiv>
      </Section>
    </>
  );
};

export default Banner;
