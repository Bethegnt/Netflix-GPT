import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import netflixbackground from '../assets/netflixbackgrnd.jpeg'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src= {netflixbackground} alt='Background'/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;