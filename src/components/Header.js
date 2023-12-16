import React,{useEffect, useState} from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/netflix-logo.webp';
import netflixuser from '../assets/netlfix-user.png';
import { addUser,removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';


import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  
  useEffect(()=>{
    const unsubscribe  = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser(
          {
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          },
        ));
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
  });
  // Unsuscribe when component unmounts
  return () => unsubscribe();
},[]);

const handleGptSearchClick=()=>{
  // toggle gpt search
  dispatch(toggleGptSearchView());
}
const handleLanguageChange = (e) =>{
  dispatch(changeLanguage(e.target.value));
};

  
  return (
    <>
    <div className='absolute w-full px-5 py-2 bg-gradient-to-b from-neutral-950 z-10 flex justify-between'>
     <img className='w-40 mx-auto md:mx-0' src={logo} alt='logo'/>
     {user && (
             <div className='flex p-2 justify-between'>
              {showGptSearch && (
              <select
              className=" mx-2 my-4 bg-gray-900 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
              )}
               <button className="py-2 px-4 mx-4 my-4 bg-red-900 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
          <img className="hidden md:block w-12 h-12 m-2 rounded-lg" alt="netflixuser" src={netflixuser}/>
          <button onClick={handleSignOut} className="font-bold text-white ">(Sign Out)</button>
        </div>
      )}
    </div>
    </>
  );
};
export default Header;
            
{/* <button className='py-2 px-4 my-5 bg-purple-700 text-white rounded-md' onClick={handleGptSearchClick}>Gpt Search</button>
              <img className='w-10 h-10 m-5 rounded-md' src={netflixuser} alt='user profile' onClick={toggleDropdownButton}/>
             
            {isDropdownButtonOpen && (
              <div className="absolute bg-[#333333] text-slate-400 mt-14 w-60 right-2 p-2 rounded-lg shadow-lg">
                <ul>
                  <div className="">Hey {userName}👋 </div>
                  <button onClick={handleSignout}>Sign out</button>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}; */}
// export default Header;
     