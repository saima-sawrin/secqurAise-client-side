import React, { useEffect, useState } from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import EventDetails from './EventDetails';
const LeftSide = () => {
  const eves =  useLoaderData();
    const {Id ,Name,Gender, picture , location , date , time} =  eves;
    // const [eves , setEves] = useState([]);
    // useEffect(()=>{
    //  fetch(`http://localhost:5000/events/${eves._id}`)
    //  .then(res => res.json())
    //  .then(data => setEves(data));
    // },[])  
  
    return (
        <div className='grid grid-cols-2 mt-6'>
        <div>
            <h1 className='font-bold text-xl'>{Id}</h1>
            <h1 className='font-bold text-xl'>Person Detected</h1>
            <p>Name: {Name}</p>
            <p>Location: {location}</p>
            <p>Date : {date}</p>
            <p>Time : {time}</p>
            <h2 className='text-xl font-medium'>Description:
                <br />
                {Name} detected at {location} on {date}
            </h2>
        </div>
        <div>
        <h1 className='font-bold text-xl'>{Gender}</h1>
            <img src={picture} alt="" className='w-full h-full'/>
        </div>
    </div>
    );
};

export default LeftSide;