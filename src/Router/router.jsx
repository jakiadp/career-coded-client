import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Home/Home';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import JobDetails from '../Component/JobDetails';
import PrivateRoute from '../Context/PrivateRoute';
import JobApply from '../Component/JobApply';


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
        {
          path:"/jobs/:id",
          Component:JobDetails,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)

        },
      {
        path: '/jobsApply/:id', // fixed spelling to match actual navigation
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        )
      }

    ]          },
]);

export default router;