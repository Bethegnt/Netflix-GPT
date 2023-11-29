import React from 'react'
import Header from './Header';
import {netflixlogo} from '../assets/netflix-logo.webp'
const Login = () => {
  return (
    <div>
      <Header/>
     <div className='absolute px-8 py-2 bg-gradient-to-b from-black '>
     <img src={"netflixlogo"} alt='logo'/>
     </div>
    </div>
  )
}

export default Login;