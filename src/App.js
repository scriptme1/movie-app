import React from 'react';
import Movie from './pages/Movie';
import MoviePage from './pages/MoviePage';
import TvPage from './pages/TvPage';
import TvDetails from './pages/TvDetails';
import TvSeasonPage from './pages/TvSeasonPage';
import TvPlayer from './pages/TvPlayer';
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
          <Route path="/movies/:movieId" component={MoviePage} exact />
          <Route path="/movie/:movieId" component={MoviePlayer} exact />
          <Route path="/tv" component={TvPage} exact />
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
