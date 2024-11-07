import React from 'react';
import "./card.css"
import Image from "./airconn.svg";
import { useNavigate } from 'react-router-dom';

export default function CardFunction({items,addToCart}){
    let navigator = useNavigate();
    const MoreDetailsButton = ()=>{
        navigator("/productDetails", { state: {longDescription: items.description } });
    }
    return (
        <>
            <div class="card">
                <div class="card-details">
                    <img src={Image} alt="Sample Image" width="50px" height="50px"/>
                    <p>{items.id}</p>
                    <p>{items.productName}</p>
                    <p>{items.productPrices}</p>
                    <button onClick={MoreDetailsButton}>More Details</button>
                </div>
                <button onClick={()=>addToCart(items)} class="card-button">Add To Cart</button>
            </div>
        </>
    )
}