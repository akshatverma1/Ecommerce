import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
export default function CartFunction(){
    const location = useLocation();
    let cart = location.state.cartDetails;
    let[deleteIN,setDeleteIN]= useState(cart);
    let[del,setDel] = useState(cart);
    const delectBtn =()=>{
        setDel([]);
    }
    const DelectIndivial=(itemdel)=>{
        const newCart = del.filter((item)=>item.id!==itemdel.id);
        setDel(newCart);
    }
    return (
        <>
        <div>
            {del.map((item,index)=>{
                return(
                    <div>
                    <h1 style={{color:"white"}}>{item.productName}</h1> 
                    <button onClick={()=> DelectIndivial(item)}>Delect Button</button>
                    </div>
                )
            })}

            <button onClick={delectBtn}>Delete</button>
        </div>
        </>
    )
}