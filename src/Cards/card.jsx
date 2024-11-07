import React from 'react';
import "./card.css"
export default function CardFunction() {
    return (
        <>
            <div class="card">
                <div class="card-details">
                    <p class="text-title">Card title</p>
                    <p class="text-body">Here are the details of the card</p>
                </div>
                <button class="card-button">More info</button>
            </div>
        </>
    )
}