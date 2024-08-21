import React, { useEffect } from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedRoutes = (props) => {
  const isLoggedIn = useSelector((state) => state.newUsers.isLoggedIn);

  const { Component } = props
  const navigate = useNavigate();
  useEffect(() => {
   
    if (!isLoggedIn) {
      navigate('/login')
    }
  })
  return (
    <div>
      
      <Component />
    </div>
  )
}

export default ProtectedRoutes
