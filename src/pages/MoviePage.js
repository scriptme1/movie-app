import React, { useEffect } from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar/MovieInfoBar';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { useMovieFetch } from '../hooks/useMovieFetch';
import Grid from '../components/Grid/Grid';
import Actor from '../components/Actor/Actor';
const MoviePage = () => {
  useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
  }, []);

  let { movieId } = useParams();
  const [movie, loading, error] = useMovieFetch(movieId);
  // console.log('Movie Result:', movie);

  if (error) return <div> Something went wrong....try to refresh</div>;
  if (loading) return <LoadingSpinner />;
  return (
    <>
      <MovieInfo movie={movie} />
      <MovieInfoBar
        budget={movie.budget}
        revenue={movie.revenue}
        time={movie.runtime}
      />
      <Grid header="Casting">
        {movie.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};
export default MoviePage;
