import React, { useState, useEffect } from 'react';
import { TvCards, GridContent, GridElement } from './TvList.styles';
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
import TvCard from '../TvCard/TvCard';
import NoPic from '../../images/no_image.jpg';

const TvList = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMoreListItems(pageNumber);
    setisLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchSearchedTvShows = async (endpoint) => {
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

  const searchTvShows = (search) => {
    const searchTerm = search;
    // setPageNumber(0);
    let endpoint = '';
    if (searchTerm === '') {

      endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }

    fetchSearchedTvShows(endpoint);
    setisLoading(false);
    setSearchTerm(searchTerm);
  };

  const fetchMoreListItems = async (pageNumber) => {
    let endpoint = '';
    setisLoading(true);
    
    if  (props.genres === 'popular') {
      if (searchTerm === '') {
     
        endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${
          pageNumber + 1
        }`;
        // endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=878&language=en-US&page=${
        //   pageNumber + 1
        // }`;
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }

    } else if (props.genres === 'action') {
      if (searchTerm === '') {
        endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=10759&language=en-US&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }
      

    } else if (props.genres === 'documentary') {
      if (searchTerm === '') {
        endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=99&language=en-US&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }
      

    } else if (props.genres === 'comedy') {
      if (searchTerm === '') {
        endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=35&language=en-US&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }
      

    } else if (props.genres === 'scifi') {
      if (searchTerm === '') {
        endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=10765&language=en-US&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }
      

    } else if (props.genres === 'animated') {
      if (searchTerm === '') {
        endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=16&language=en-US&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      }
      

    } else if (props.genres === 'crime') {
      if (searchTerm === '') {
        endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=80&language=en-US&page=${
          pageNumber + 1
        }`;
        setPageNumber(pageNumber + 1);
      } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
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

  const handleScroll = () => {
  

    if (
      // window.pageYOffset >= window.clientHeight && Math.round((document.documentElement.scrollTop + window.innerHeight)) < document.documentElement.scrollHeight - 72
     Math.round(document.documentElement.scrollTop + window.innerHeight) >=
     Math.round(document.documentElement.scrollHeight)
      
    )
     
      setIsFetching(true);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div style={{'backgroundColor': '#353535'}}>
      <SearchBar searchMovies={searchTvShows} inputValue={searchTerm} />
      <TvCards>
        <h1
          style={{
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            color: '#baf733',
            textTransform: 'uppercase'
          }}
        >
          {props.genres} Series
        </h1>
        <GridContent>
          {props.state.map((tv) => (
            <GridElement key={tv.id} id="list">
              <TvCard
                tvId={tv.id}
                key={tv.id}
                image={
                  tv.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tv.poster_path}`
                    : `${NoPic}`
                }
                clickable={true}
              />
            </GridElement>
          ))}
        </GridContent>
      </TvCards>
    </div>
  );
};

export default TvList;
