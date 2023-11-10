// CardLayout.jsx
import React from 'react';
import CardData from './CardData';


const CardLayout = ({title,idx}) => {
    let oldPrice = [12000,40000,15000, 20000];
    let newPrice = [10000,36000,12000, 18000];
    let description = [
        ["4GB ram", "64GB storage"],
        ["i7 processor", "4GB graphics",],
        ["6GB ram", "64GB storage"],
        ["32-inch TV", "HD display"]];
  return (
    <div style={{border:'1px solid black',
     marginRight:'1em',
       borderRadius:'1em',
       textAlign:'center'}}>
        <h4 style={{margin:'1em 3em'}}>{title}</h4>
        <p style={{margin:'0em 3em'}}>{description[idx][0]}</p>
        <p style={{margin:'1em 3em'}}>{description[idx][1]}</p>
        <CardData oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/>
    </div>
  )
}

export default CardLayout
