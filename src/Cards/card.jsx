import React from 'react';
import "./card.css"

import { useNavigate } from 'react-router-dom';

export default function CardFunction({ items, addToCart }) {
    let navigator = useNavigate();
    const MoreDetailsButton = () => {
        navigator("/productDetails", { state: { items: items } });

    }
    return (
        <>
            <div class="card">
                <div class="card-details">
                    <img className="productImage" src={items.image} alt="Sample Image" width="180px" height="150px" />
                    {/* <p style={{ color: "white" }}>{items.id}</p> */}

                </div>
                <p style={{ color: "white" }} className='productName'>{items.productName}</p>
                <p style={{ color: "white" }} className='itemprices'>₹{items.prices}</p>
                <button onClick={MoreDetailsButton} class="buttonnn">
                    View Details
                   
                </button>
                <button onClick={() => addToCart(items)} class="card-button">Add To Cart</button>
            </div>
        </>
    )
}