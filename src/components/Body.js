import { createBrowserRouter} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Browser from './Browser';
import { RouterProvider} from 'react-router-dom';

const Body = () => {
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
  
  return (
    <div>
        <>
        <RouterProvider router={appRouter}/>
        </>
    </div>
  )
}

export default Body;