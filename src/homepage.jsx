import React from 'react';
import "./homepage.css"
import Card from "./Cards/card.jsx";
import Navbar from './Navbar/navbar.jsx';
import JsonData from "./ItemData/electronics_products.json";

export default function Homepagefunction() {
    

    async function call(){
        try {
            await fetch("./ItemData/electronics_products.json").then(res => res.json()).then(data=>{
                console.log(data);
            });
        } catch (error) {
            console.log("Error in Javascript");
        }
    }
    
    return (
        <>
            <div className="maine">
                <center>
                    <div className='cardse'>
                        {JsonData.map((item, index) => (
                            <Card id={item.id} productName={item.productName} description={item.description} productPrices={item.prices}></Card>
                        ))}
                    </div>
                </center>
            </div>
        </>
    )
}