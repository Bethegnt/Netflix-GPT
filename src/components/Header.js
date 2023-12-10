import React,{useState} from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import netflixlogo from '../assets/netflix-logo.webp';
import netflixuser from '../assets/netlfix-user.png';
import { addUser } from '../utils/userSlice';


const Header = () => {
  const [isDropdownButtonOpen,setIsDropdownButtonOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const userName = user?.displayName;
  const toggelDropdownButton = () =>{
    setIsDropdownButtonOpen(!isDropdownButtonOpen);
  };
  
  
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(addUser(userName));
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
    <div className='absolute w-full px-5 py-2 bg-gradient-to-b from-neutral-950 z-10 flex justify-between'>
     <img className='w-40' src={netflixlogo} alt='logo'/>
     {user && (
             <div><img className='w-10 h-10 m-5 rounded-md  z-10 flex justify-between' src={netflixuser} alt='user profile' onClick={toggelDropdownButton}/>
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
        <div></div>
      </div>
    </>
  );
};
export default Header;
     