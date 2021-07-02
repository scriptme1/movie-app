import React, { useEffect } from 'react';
import TvInfo from '../components/TvInfo/TvInfo';
import TvInfoBar from '../components/TvInfoBar/TvInfoBar';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { useTvFetch } from '../hooks/useTvFetch';
import Grid from '../components/Grid/Grid';
import Season from '../components/Season/Season';
import Actor from '../components/Actor/Actor';

const MoviePage = () => {
  useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
  }, []);

  let { tvId } = useParams();
  const [tvshow, loading, error] = useTvFetch(tvId);
  console.log(tvshow);

  if (error) return <div> Something went wrong....try to refresh</div>;
  if (loading) return <LoadingSpinner />;
  return (
    <>
      <TvInfo tvshow={tvshow} />
      <TvInfoBar
        noSeasons={tvshow.number_of_seasons}
        noEpisodes={tvshow.number_of_episodes}
        popularity={tvshow.popularity}
      />
      <Grid header="Actors">
        {tvshow.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>

      <Grid header="Seasons List">
        {tvshow.seasons.map((season) => (
          <Season key={season.id} season={season} tvShowId={tvId} />
        ))}
      </Grid>
    </>
  );
};
export default MoviePage;
