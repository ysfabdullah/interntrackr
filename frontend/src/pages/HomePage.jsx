import React, { useEffect } from 'react'
import Navbar from '../componets/Navbar';
import RateLimitedUI from '../componets/RateLimitedUI';
import { useState } from 'react';


const HomePage = () => {
  const [israteLimited, setIsRateLimited] = useState(true);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axious.get('https://interntrackr-backend.onrender.com/api/internships');
      const data = await response.json();
      console.log(data);
      
      } catch (error) {
        console.error('Error fetching internships:', error)
      }
  }

  fetchInternships();
  }, [])


  return (
    <div classname="min-h-screen">
    
      <Navbar />

      {israteLimited && <RateLimitedUI />}
    </div>
  );
  
};

export default HomePage
