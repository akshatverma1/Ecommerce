import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Moredetails(){
    const location = useLocation();
    const navigator = useNavigate();
    const cartButton=()=>{
        navigator("/cart",{state :{cartDetails : cart}});
    }
    let itemp = location.state.items;
    async function call(){
        try {
            await fetch("./ItemData/electronics_products.json").then(res => res.json()).then(data=>{
                console.log(data);
            });
        } catch (error) {
            console.log("Error in Javascript");
        }
    }
    const [count,setCount]= useState(0);
    const [cart,setCart]= useState([]);
    const addToCart=(data)=>{
        setCart([...cart,data]);
        setCount(count+1);
    }
    
    return(
        <>
        <button onClick={cartButton} style={{backgroundColor:"white", color:"black"}}>{count}Cart</button>
        <h1 style={{color:"white"}}>{itemp.productName}</h1>
        <button onClick={()=>addToCart(itemp)} >Add To Cart</button>
        </>
    )
}