import React from 'react';

function Dinner(props) //props is argument 
{
    return (
    <div>
     
     
    <h1>Today we are serving {props.dishname}</h1>
    <h1>Today we are serving {props.sweetdish}</h1>
    </div>
       
    )
}

export default Dinner;