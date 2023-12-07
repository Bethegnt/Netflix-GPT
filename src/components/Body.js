import { createBrowserRouter, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Login from './Login';
import Browser from './Browser';
import { RouterProvider} from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/browser",
      element : <Browser/>
    }
  ]);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser(
          {
            uid: uid,
            email: email,
            displayName: displayName
          },
        ));
        // navigate("/browser");  // because it gives me a error of navigate in written inthe router not out side from router.
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/")
      }
  });
},[]);
  return (
    <div>
        <>
        <RouterProvider router={appRouter}/>
        </>
    </div>
  )
}

export default Body;