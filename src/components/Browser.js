import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
  useNowPlayingMovies();
  return (
    <>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </>
  );
  };
export default Browser; 