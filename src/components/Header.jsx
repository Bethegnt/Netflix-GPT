import React from 'react';
import netflixlogo from '../assets/netflix-logo.webp';

const Header = () => {
  return (
    <div className='absolute px-5 py-2 bg-gradient-to-b from-neutral-950 z-10'>
     <img className='w-40' src={netflixlogo} alt='logo'/>
    </div>
  )
}

export default Header;