import React, { useState } from 'react'
import Header from './Header';
import netflixabg from '../assets/netflixbackgrnd.jpeg'
const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  };
  return (
    <div>
      <Header/>
    <div className='absolute'>
      <img src={netflixabg} alt="netflixbg" />
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-90'>
      <h1 className='text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-2 my-3 w-full rounded-md bg-zinc-700'/>)}
      {!isSignInForm && (<input typeof="tel" placeholder='Contact Number' className='p-2 my-3 w-full rounded-md bg-zinc-700'/>)}
      <input type="text" placeholder='Email Address' className='p-2 my-3 w-full rounded-md bg-zinc-700'/>
      <input type="text" placeholder='Password' className='p-2 my-3 w-full rounded-md bg-zinc-700'/>
      <button className='p-4 my-6 bg-red-700 w-full rounded-md'>{isSignInForm? "Sign In" : "Sign Up"}</button>
      <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login;