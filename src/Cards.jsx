// Cards.jsx
import React from 'react';
import CardLayout from './Components/CardLayout';

const Cards = () => {

  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <CardLayout title = "Phone" idx={0}/>
      <CardLayout title = "Laptop" idx={1}/>
      <CardLayout title = "Tablet" idx={2}/>
      <CardLayout title = "TV" idx={3}/>
    </div>
  )
}

export default Cards
