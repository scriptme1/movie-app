import React, { useState, useEffect } from 'react';
import { MovieCards, GridContent, GridElement } from './MovieList.styles';
import axios from 'axios';
import { API_URL, API_KEY } from '../../config';
import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
  // SEARCH_BASE_URL,
  // POPULAR_BASE_URL,
} from '../../config';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SearchBar from '../SearchBar/SearchBar';
import MovieCard from '../MovieCard/MovieCard';
import NoPic from '../../images/no_image.jpg';

const MovieList = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMoreListItems(pageNumber);
    setisLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //  setPageNumber(pageNumber + 1); originally inside the useEffect after setisLoading(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchSearchedMovies = async (endpoint) => {
    setisLoading(true);

    await axios
      .get(`${endpoint}`)
      .then((response) => {
        props.setState([...response.data.results]);
        setIsFetching(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const searchMovies = (search) => {
    const searchTerm = search;
    // setPageNumber(0);
    let endpoint = '';
    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }

    fetchSearchedMovies(endpoint);
    setisLoading(false);
    setSearchTerm(searchTerm);
  };

  const fetchMoreListItems = async (pageNumber) => {
    let endpoint = '';
    setisLoading(true);

    if (props.genres === 'popular') {
      if (searchTerm === '') {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }

    } else if (props.genres === 'action') {
      if (searchTerm === '') {
       
        endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${28}&page=${
          pageNumber + 1
        }`;
       
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }
    } else if (props.genres === 'drama') {
      if (searchTerm === '') {
       
        endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${18}&page=${
          pageNumber + 1
        }`;
       
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }

    } else if (props.genres === 'comedy') {
        
      if (searchTerm === '') {
       
        endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${35}&page=${
          pageNumber + 1
        }`;
       
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }
      
    } else if (props.genres === 'scifi') {

      if (searchTerm === '') {
       
        endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${878}&page=${
          pageNumber + 1
        }`;
       
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }


    } else if (props.genres === 'horror') {

      if (searchTerm === '') {
       
        endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${27}&page=${
          pageNumber + 1
        }`;
       
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }
    } else if (props.genres === 'animated') {
      if (searchTerm === '') {
       
        endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${16}&page=${
          pageNumber + 1
        }`;
       
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }

    }
   

    await axios
      .get(`${endpoint}`)
      .then((response) => {
        props.setState([...props.state, ...response.data.results]);
        setIsFetching(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (!isFetching) return;

    fetchMoreListItems(pageNumber);
    setPageNumber(pageNumber + 1);
    setisLoading(false);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  const handleScroll = (e) => {
   

    if (
      Math.round(document.documentElement.scrollTop + window.innerHeight) >=
      Math.round(document.documentElement.scrollHeight)
     
    )
      setIsFetching(true);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <SearchBar searchMovies={searchMovies} inputValue={searchTerm} />
      <MovieCards>
        <h1
          style={{
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            color: '#baf733',
            textTransform: 'uppercase'
          }}
        >
          {props.genres} Movies
        </h1>
        <GridContent>
          {props.state.map((movie) => (
            <GridElement key={movie.id} id="list">
              <MovieCard
                movieId={movie.id}
                key={movie.id}
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : `${NoPic}`
                }
                clickable={true}
              />
            </GridElement>
          ))}
        </GridContent>
      </MovieCards>
    </div>
  );
};

export default MovieList;
