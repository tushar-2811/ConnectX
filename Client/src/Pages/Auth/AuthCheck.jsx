import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';


const AuthCheck = () => {
 
  const navigate = useNavigate();

  useEffect(() => {
     if(!localStorage.getItem("token")) {
        navigate('/login');
     }
     
  })
   
  return (
    <>
      <Outlet/>
    </>
  )
}

export default AuthCheck;
