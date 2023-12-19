import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import netflixbackground from '../assets/netflixbackgrnd.jpeg'

const GptSearch = () => {
  return (
    <>
     <div className='fixed -z-10 '>
            <img className='h-screen object-cover' src= {netflixbackground} alt='Background'/>
        </div>
        <div className=''> 
        {/* pt-[25%] md:p-0 */}
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
    
  )
}

export default GptSearch;