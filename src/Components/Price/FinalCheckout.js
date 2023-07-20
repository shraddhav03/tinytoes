import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./PriceCard.css";

export const FinalCheckout = () => {
  const navigate = useNavigate()
  return (
    <>
    <div><h2 className='checkoutheading'>Thanks For shopping from TinyToes!!!!</h2></div>
    <button onClick={()=>navigate("/")}>Continue Shopping...</button>
    </>
  )
}
