import React from 'react';
// import TvInfo from '../components/TvInfo/TvInfo';
import TvSeasonInfo from '../components/TvSeasonInfo/TvSeasonInfo';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { useTvEpisodeFetch } from '../hooks/useTvEpisodeFetch';
import Grid from '../components/Grid/Grid';
import Episode from '../components/Episode/Episode';
// import Actor from '../components/Actor/Actor';

const TvSeasonPage = () => {
  let { tvId, seasonNumber } = useParams();
  const [tvshow, loading, error] = useTvEpisodeFetch(tvId, seasonNumber);

  if (error) return <div> Something went wrong....try to refresh</div>;
  if (loading) return <LoadingSpinner />;

  // console.log(tvshow);
  return (
    <>
      <TvSeasonInfo tvshow={tvshow} />
      <Grid header="Episodes List">
        {tvshow.episodes.map((episode) => (
          <Episode key={episode.id} season={episode} tvShowId={tvId} />
        ))}
      </Grid>
    </>
  );
};

export default TvSeasonPage;
