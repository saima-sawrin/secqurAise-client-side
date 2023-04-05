import React from 'react';

import { Outlet } from 'react-router-dom';


import '../App.css';
import RightSide from '../Components/RightSide/RightSide';
import Header from '../Components/Shared/Header';
import LeftSide from '../Components/LeftSide/LeftSide';
const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <div className="flex  mx-5">
  <div className="w-2/3 ..."><Outlet></Outlet></div>
  <div className="w-1/3 ..."><RightSide></RightSide></div>
</div>
            
        </div>
       
    );
};

export default Main;