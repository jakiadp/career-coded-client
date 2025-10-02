import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Home/Home';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component: Home,
        }, 
        {
            path:"/signUp",
            Component:SignUp

        },
          {
            path:"/signIn",
            Component:SignIn

        },
    ]          },
]);

export default router;