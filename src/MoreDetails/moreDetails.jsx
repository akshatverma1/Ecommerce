import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Moredetails(){
    const location = useLocation();
    let itemp = location.state.longDescription;


    
    return(
        <>More Details{itemp} 
        <h1 style={{color:"white"}}>{itemp}</h1>
        </>
    )
}