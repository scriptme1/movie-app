import React from 'react';
import { Link } from 'react-router-dom';
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

          <Button>
            <Link className="sublink" to="/movies" style={{ color: '#baf733' }}>
              Movies
            </Link>
          </Button>
          <Button>
            <Link className="sublink" to="/tv" style={{ color: '#baf733' }}>
              TV Series
            </Link>
          </Button>
        </TextDiv>
      </Section>
    </>
  );
};

export default Banner;
