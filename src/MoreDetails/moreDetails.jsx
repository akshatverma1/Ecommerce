import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./moreDetails.css";
import imagess from "./airconn.svg";
export default function Moredetails() {
    const location = useLocation();
    const navigator = useNavigate();
    const cartButton = () => {
        navigator("/cart", { state: { cartDetails: cart } });
    }
    let itemp = location.state.items;
    async function call() {
        try {
            await fetch("./ItemData/electronics_products.json").then(res => res.json()).then(data => {
                console.log(data);
            });
        } catch (error) {
            console.log("Error in Javascript");
        }
    }
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const addToCart = (data) => {
        setCart([...cart, data]);
        setCount(count + 1);
    }

    return (
        <>
            <nav style={{ marginLeft: "40rem" }} className="navbar">
                <ul className="navbar-links">
                    <Link className="linkhome" to={"/"}><li><i class="fa-solid fa-house"></i>    Home</li></Link>
                    <button onClick={cartButton} className="cartbtn">
                        <strong><i class="fa-solid fa-cart-shopping"> {count}</i></strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>

                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </button>
                </ul>
            </nav>
            <center>
                <div class="cardddd">
                    <div class="contentdddd">
                        <div> <img src={itemp.image} width="150px" height="150px" /></div>
                       
                        <div class="titledddd">{itemp.productName}</div>
                        <div class="pricedddd">{itemp.prices}</div>
                        <div class="descriptionddd">Description <i class="fa-solid fa-arrow-turn-down"></i></div>
                        <div class="descriptiondddd">{itemp.description}</div>
                    </div>
                    <button onClick={() => addToCart(itemp)} class="buybtn">
                    Add To Cart
                    </button>
                </div>
            </center>
        </>
    )
}