import React from 'react';
import "./card.css"
import Image from "./airconn.svg";
export default function CardFunction() {
    return (
        <>
            <div class="card">
                <div class="card-details">
                    <img src={Image} alt="Sample Image" width="50px" height="50px"/>
                    <p class="text-title">Card title</p>
                    <p class="text-body">Here are the details of the card</p>
                </div>
                <button class="card-button">Add To Cart</button>
            </div>
        </>
    )
}