import React from 'react';
import { createBrowserRouter } from 'react-router-dom';


import Main from '../Layout/Main';
import Home from '../Components/Home';
import RightSide from '../Components/RightSide/RightSide';
import LeftSide from '../Components/LeftSide/LeftSide';



const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children:[
          // {
        
          //     path:'/',
          //     element: <Home></Home>
          
          // },
          {
            path:'/events/:id',
            loader:({params})=>fetch(`http://localhost:5000/events/${params.id}`),
            element: <LeftSide></LeftSide>
          }
          
          // {
          //   path:'/events',
          //   loader:()=>fetch('https://learning-platform-server-saima-sawrin.vercel.app/coursesInfo'),
          //   element:

          // },
         
      
       
         
         
        ]
      },
      
        
      
    ])


export default router;