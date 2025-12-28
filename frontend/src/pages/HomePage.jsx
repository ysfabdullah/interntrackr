import React, { useEffect } from 'react'
import Navbar from '../componets/Navbar';
import RateLimitedUI from '../componets/RateLimitedUI';
import { useState } from 'react';
import axious from 'axios';


const HomePage = () => {
  const [israteLimited, setIsRateLimited] = useState(true);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axious.post('https://interntrackr-backend.onrender.com/api/internships');
      const data = await response.json();
      console.log(response.data);
      
      } catch (error) {
        console.error('Error fetching internships:', error)
      }
  }

  fetchInternships();
  }, [])


  return (
    <div className="min-h-screen">
    
      <Navbar />

      {israteLimited && <RateLimitedUI />}
    </div>
  );
  
};

export default HomePage
