import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
export default function CartFunction(){
    const location = useLocation();
    let cart = location.state.cartDetails;
    let[del,setDel] = useState(cart);
    const delectBtn =()=>{
        setDel([]);
    }
    return (
        <>
        <div>
            {del.map((item,index)=>{
                return(
                    <div>
                    <h1 style={{color:"white"}}>{item.productName}</h1>
                    <button>Delect Button</button>
                    </div>
                )
            })}

            <button onClick={delectBtn}>Delete</button>
        </div>
        </>
    )
}