import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector((store)=> store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center rounded-lg'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className='p-3 m-3 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className= ' px-4 p-3 m-3 cols-span-3 bg-red-700 text-white'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;