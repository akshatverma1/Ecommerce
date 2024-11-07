import React from 'react';
import "./card.css"
import Image from "./airconn.svg";
export default function CardFunction({id,productName,description,productPrices}) {
    return (
        <>
            <div class="card">
                <div class="card-details">
                    <img src={Image} alt="Sample Image" width="50px" height="50px"/>
                    <p class="text-title">{id}</p>
                    <p>{productName}</p>
                    <p>{description}</p>
                    <p>{productPrices}</p>
                </div>
                <button class="card-button">Add To Cart</button>
            </div>
        </>
    )
}