import React, { useState } from 'react';
import "./homepage.css"
import Card from "./Cards/card.jsx";
import Navbar from './Navbar/navbar.jsx';
import JsonData from "./ItemData/electronics_products.json";
import { useNavigate } from 'react-router-dom'; 
export default function Homepagefunction() {
    const navigator = useNavigate();
    const cartButton=()=>{
        navigator("/cart",{state :{cartDetails : cart}});
    }

    async function call(){
        try {
            await fetch("./ItemData/electronics_products.json").then(res => res.json()).then(data=>{
                console.log(data);
            });
        } catch (error) {
            console.log("Error in Javascript");
        }
    }
    const [cart,setCart]= useState([]);
    const [count,setCount]= useState(0);
    const addToCart=(data)=>{
        setCart([...cart,data]);
        setCount(count+1);
    }
    
    return (
        <>
        <button onClick={cartButton} style={{backgroundColor:"white", color:"black"}}>{count} Cart</button>
            <div className="maine">
                <center>
                    <div className='cardse'>
                        {JsonData.map((item, index) => (
                            <Card items={item} addToCart={addToCart}></Card>
                        ))}
                    </div>
                </center>
            </div>
        </>
    )
}