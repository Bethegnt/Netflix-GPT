import React, { useRef, useState } from 'react'
import Header from './Header';
import netflixabg from '../assets/netflixbackgrnd.jpeg';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const fullname = useRef(null);
  const contact = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value, fullname.current.value, contact.current.value,);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(fullname.current.value);
    console.log(contact.current.value);
    setErrorMessage(message);
  }

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  };
  return (
    <div>
      <Header/>
    <div className='absolute'>
      <img src={netflixabg} alt="netflixbg" />
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-90'>
      <h1 className='text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (<input ref={fullname} type="text" placeholder='Full Name' className='p-2 my-3 w-full rounded-md bg-zinc-700'/>)}
      {!isSignInForm && (<input ref={contact} typeof="tel" placeholder='Contact Number' className='p-2 my-3 w-full rounded-md bg-zinc-700'/>)}
      <input ref={email} type="text" placeholder='Email Address' className='p-2 my-3 w-full rounded-md bg-zinc-700'/>
      <input ref={password} type="password" placeholder='Password' className='p-2 my-3 w-full rounded-md bg-zinc-700'/>
      <p className='text-yellow-700'>{errorMessage}</p>
      <button className='p-4 my-6 bg-red-700 w-full rounded-md' onClick={handleButtonClick} >{isSignInForm? "Sign In" : "Sign Up"}</button>
      <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login;