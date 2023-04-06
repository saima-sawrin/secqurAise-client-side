import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Events from './Events';
import Header from '../Shared/Header';

const RightSide = () => {
    const [events , setEvents] = useState([])
    useEffect(()=>{
        fetch('https://assignment-server-side-three.vercel.app/events')
        .then(res => res.json())
        .then(data => setEvents(data))
      },[])
     return (
  <div>
    <h1 className='font-bold text-xl text-center my-3 '>Events</h1>
      <div >
      
      {
       events.map(event => <Events key={event._id} event={event}>  </Events>)
      }

            </div>
           
  </div>
    
    );
};

export default RightSide;