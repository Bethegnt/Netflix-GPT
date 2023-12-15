import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </>
  );
  };
export default Browser; 