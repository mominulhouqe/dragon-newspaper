import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Main from '../Layout/Main'
import Catagory from '../pages/Home/Catagory/Catagory';
import NewsLayout from '../Layout/NewsLayout';
import News from '../pages/News/News';
import Login from '../pages/Register/Login/Login';
import LoginLayout from '../Layout/LoginLayout';
import Register from '../pages/Register/Registers/Registers';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Terms from '../pages/Shared/Terms/Terms';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login ></Login>,
      },
      {
        path: 'register',

        element: <Register></Register>
      },
      {
        path:'terms',
        element:<Terms></Terms>
      }
    ]

  },
  {
    path: 'category',
    element: <Main></Main>,
    children: [
      // {
      //   path: '/',
      //   element: <Catagory />,
      //   loader: ()=> fetch(`http://localhost:5000/news/`)
      // },
      {
        path: ':id',
        element: <Catagory></Catagory>,
        loader: ({ params }) => fetch(`http://localhost:5000/catagrories/${params.id}`)
      },
    ]
  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute> <News /></PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }

])

export default router;