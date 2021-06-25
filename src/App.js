import React from 'react';
import Movie from './pages/Movie';
import MoviePage from './pages/MoviePage';
import MovieAction from './pages/MovieAction';
import MovieDrama from './pages/MovieDrama';
import MovieAnimated from './pages/MovieAnimated';
import MovieHorror from './pages/MovieHorror';
import ComedyMovies from './pages/ComedyMovies';
import MovieScifi from './pages/MovieScifi';
import TvPage from './pages/TvPage';
import TvDocumentary from './pages/TvDocumentary';
import TvComedy from './pages/TvComedy';
import TvDetails from './pages/TvDetails';
import TvScifi from './pages/TvScifi';
import TvAnimation from './pages/TvAnimation';
import TvCrime from './pages/TvCrime';
import TvSeasonPage from './pages/TvSeasonPage';
import TvPlayer from './pages/TvPlayer';
import TvAction from './pages/TvAction';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoviePlayer from './pages/MoviePlayer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/movie-app" exact component={Home} />
          <Route path="/movies" exact component={Movie} />
          <Route path="/actionmovies" exact component={MovieAction} />
          <Route path="/dramamovies" exact component={MovieDrama} />
          <Route path="/animatedmovies" exact component={MovieAnimated} />
          <Route path="/comedymovies" exact component={ComedyMovies} />
          <Route path="/scifimovies" exact component={MovieScifi} />
          <Route path="/horrormovies" exact component={MovieHorror} />
          <Route path="/movies/:movieId" component={MoviePage} exact />
          <Route path="/movie/:movieId" component={MoviePlayer} exact />
          <Route path="/tv" component={TvPage} exact />
          <Route path="/actiontv" component={TvAction} exact />
          <Route path="/documentarytv" component={TvDocumentary} exact />
          <Route path="/comedytv" component={TvComedy} exact />
          <Route path="/scifitv" component={TvScifi} exact />
          <Route path="/animatedtv" component={TvAnimation} exact />
          <Route path="/crimetv" component={TvCrime} exact />
          <Route path="/tv/:tvId" component={TvDetails} exact />

          <Route
            path="/tvshow/:tvId/:seasonNumber/:seasonId"
            component={TvSeasonPage}
            exact
          />
          <Route
            path="/tv/:tvId/:seasonNumber/:episodeNumber"
            component={TvPlayer}
            exact
          />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
