import React from 'react';

const EventDetails = ({e}) => {
    const {picture, Id}=e;
    return (
        <div className='grid grid-cols-2'>
        <div>
            <h1 className='font-bold text-3xl'>{Id}</h1>
        </div>
        <div>
            <img src={picture} alt="" />
        </div>
    </div>
    );
};

export default EventDetails;