import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browser = () => {
  useNowPlayingMovies();
  return (
    <>
    <Header/>
    </>
  );
  };
export default Browser; 