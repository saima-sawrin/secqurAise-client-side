import React, { useEffect, useState } from 'react';
import logo from '../../Asset/logo.webp';
import './Header.css';
import { FaBeer, FaSearch } from "react-icons/fa";
import RightSide from '../RightSide/RightSide';
const Header = () => {
    const [events , setEvents] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
      },[])
    return (
        <div className=' navBar  flex justify-between'>
            <div  className='my-5'>
                <img className='h-8' src={logo} alt="" />
            </div>
            <div className='my-5'>
             <button><FaSearch className='inline text-white me-10'></FaSearch></button>
            <button  className=" mx-2 px-8 py-1 bg-lime-500 text-white male">{events.length}</button>
            <button className="  mx-2 px-8 py-1 bg-red-600 text-white female">{events.length}</button>
            </div>
           
        </div>
    );
};

export default Header;