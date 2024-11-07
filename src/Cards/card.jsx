import React from 'react';
import "./card.css"
import Image from "./airconn.svg";
// import { useNavigate } from 'react-router-dom';
export default function CardFunction({id,productName,description,productPrices}){
    // const MoreDetailsButton = ()=>{
    //     navigator("/details", { state: { pricess: description } });
    // }
    return (
        <>
            <div class="card">
                <div class="card-details">
                    <img src={Image} alt="Sample Image" width="50px" height="50px"/>
                    <p>{id}</p>
                    <p>{productName}</p>
                    <p>{productPrices}</p>
                    <button>More Details</button>
                </div>
                <button class="card-button">Add To Cart</button>
            </div>
        </>
    )
}