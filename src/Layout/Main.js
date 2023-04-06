import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import '../App.css';
import RightSide from '../Components/RightSide/RightSide';
import Header from '../Components/Shared/Header';
import LeftSide from '../Components/LeftSide/LeftSide';
import Filter from '../Components/LeftSide/Filter';
import ReactDatePicker from 'react-datepicker';
const Main = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    
    return (
        <div className='main'>
            <Header></Header>
            <div className="flex  ">
            <div className="  bg-blue-400">
         <Filter></Filter>
   </div>
  <div className="w-2/3 ..."><Outlet></Outlet></div>
  <div className="w-1/3 ..."><RightSide></RightSide></div>
</div>
            
 
        </div>
       
    );
};

export default Main;