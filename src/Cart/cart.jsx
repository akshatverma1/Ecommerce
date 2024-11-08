import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import "./cart.css";
import { Link } from 'react-router-dom';
export default function CartFunction() {
    const location = useLocation();
    let cart = location.state.cartDetails;
    let [total, setTotal] = useState(0);
    let [deleteIN, setDeleteIN] = useState(cart);
    let [del, setDel] = useState(cart);
    const delectBtn = () => {
        setDel([]);
    }
    const DelectIndivial = (itemdel) => {
        const newCart = del.filter((item) => item.id !== itemdel.id);
        setDel(newCart);
    }
    const addPrices = (ppp) => {
        setTotal(total + 1);
        console.log(ppp);
    }
    let pricesarr = del.map(item => item.prices).reduce((total, value) => total + value, 0);
    console.log(pricesarr);
    return (
        <>
            <Link className='backHome' to={"/"}>
                <div ><i class="fa-solid fa-arrow-left"></i> Home</div>
            </Link>
            <center>
                <h1 class="heacdingcart">Cart</h1>
            </center>
            <div>
                {del.map((item, index) => {
                    return (

                        <div className='cartProducttt'>
                            <div>
                                <h1 className='productheading'>{index}</h1>
                                <h1 className='productheading'>{item.productName}</h1>
                            </div>
                            <div>
                                <h1 style={{ color: "#00e33d", marginRight: "1rem" }} className='productheading'>₹{item.prices}</h1>
                                <button onClick={() => DelectIndivial(item)}>Delete</button>

                            </div>
                        </div>

                    )
                })}
                <center>
                    <h1 style={{ color: "#00e33d", marginLeft: "49rem" }} className='productheading'>Total - ₹{pricesarr}</h1>
                </center>
                <center>
                    <button className="deleteAll " onClick={delectBtn}>Delete All</button>
                </center>
                <center>
                
                    <div data-tooltip={pricesarr} class="buttooon">
                        <div class="buttooon-wrapper">
                            <div class="textbuy">Buy Now</div>
                            <span class="iconbuy">
                                <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>


                </center>

            </div>

        </>
    )
}