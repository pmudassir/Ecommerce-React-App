import React from 'react'
import { useLocation } from 'react-router-dom'


const Success = () => {

  const location = useLocation()
  const data = location.state.stripeData
  console.log(data);

  return (
    <div>Success</div>
  )
};

export default Success