import React from 'react';
import RightSide from './RightSide/RightSide';
import LeftSide from './LeftSide/LeftSide';

const Home = () => {
    return (
        <div className="flex  mx-5">
  <div className="w-2/3 ..."><LeftSide></LeftSide></div>
  <div className="w-1/3 ..."><RightSide></RightSide></div>
</div>
    );
};

export default Home;