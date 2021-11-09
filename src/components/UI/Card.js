import React from 'react';
import classes from './Card.module.css';
const Card =(props)=>{   //here the props denotes the props of
return <div className={`${classes.card} ${props.className}`}>{props.children}</div>; //classes.card for importing it from card css and props.className for importing it from adduser.js custom class
};


export default Card;