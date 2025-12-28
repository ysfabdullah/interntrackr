import React, { useEffect } from 'react'
import Navbar from '../componets/Navbar';
import RateLimitedUI from '../componets/RateLimitedUI';
import { useState } from 'react';
import axious from 'axios';
import toast from 'react-hot-toast';



const HomePage = () => {
  const [israteLimited, setIsRateLimited] = useState(false);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await axious.get("http://localhost:5173/api/internships");
        console.log(res.data);
        setInternships(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error('Error fetching internships:', error)
        if(error.response.status === 429) {
          setIsRateLimited(true);
        }else{
          toast.error("Failed to fetch internships");
        }
      }finally {
        setLoading(false);
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
