import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Main from '../Layout/Main'
import Catagory from '../pages/Home/Catagory/Catagory';
import NewsLayout from '../Layout/NewsLayout';
import News from '../pages/News/News';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        element: <Catagory></Catagory>,
        loader:({params})=> fetch(`http://localhost:5000/catagrories/${params.id}`)
      },
      
    ]
  },
  {
    path:'/news',
    element: <NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element: <News />,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }

])

export default router;