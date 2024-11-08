import React, { useState } from 'react';
import "./homepage.css"
import Card from "./Cards/card.jsx";
import Navbar from './Navbar/navbar.jsx';
import JsonData from "./ItemData/electronics_products.json";
import { useNavigate } from 'react-router-dom';
import "./Navbar/navbar.css"
import { Link } from 'react-router-dom';
import Headingfunction from './Animation/heading.jsx';
export default function Homepagefunction() {
    const navigator = useNavigate();
    const cartButton = () => {
        navigator("/cart", { state: { cartDetails: cart } });
    }

    async function call() {
        try {
            await fetch("./ItemData/electronics_products.json").then(res => res.json()).then(data => {
                console.log(data);
            });
        } catch (error) {
            console.log("Error in Javascript");
        }
    }

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const addToCart = (data) => {
        setCart([...cart, data]);
        setCount(count + 1);
    }
    return (
        <>
            <nav className="navbar">
                <Headingfunction></Headingfunction>
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