import React from 'react';
import { Link } from 'react-router-dom';

const Events = ({event}) => {
    const {Id,location ,date , time } =  event;
    return (
        <div className='border-2 border-solid-black-400  items-center text-center bg-slate-500 text hover:bg-slate-600'>
            <Link to={`events/${event._id}`}>
            <button>
    <div className='flex justify-between gap-8 items-center text-center text-white'>
            <div >
            <div>  <p>{Id}:{location}</p></div>
             <div><p>Person Detected</p></div>
            </div>
            <div>
               <p>{date} {time}</p>
              
            </div>
        </div>
        </button>
            </Link>
              
        </div>
    );
};

export default Events;