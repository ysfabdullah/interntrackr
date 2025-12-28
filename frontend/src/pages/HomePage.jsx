import React from 'react'
import Navbar from '../componets/Navbar';
import RateLimitedUI from '../componets/RateLimitedUI';
import { useState } from 'react';

const HomePage = () => {
  const [israteLimited, setIsRateLimited] = useState(true);

  return (
    <div classname="min-h-screen">
    
      <Navbar />

      {israteLimited && <RateLimitedUI />}
    </div>
  );
  
};

export default HomePage
