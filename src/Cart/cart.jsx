import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import "./cart.css";
export default function CartFunction() {
    const location = useLocation();
    let cart = location.state.cartDetails;
    let [total,setTotal] = useState(0);
    let [deleteIN, setDeleteIN] = useState(cart);
    let [del, setDel] = useState(cart);
    const delectBtn = () => {
        setDel([]);
    }
    const DelectIndivial = (itemdel) => {
        const newCart = del.filter((item) => item.id !== itemdel.id);
        setDel(newCart);
    }
    const addPrices = (ppp)=>{
        setTotal(total+1);
        console.log(ppp);
    }
    
    return (
        <><center>
            <h1 class="heacdingcart">Cart</h1>
            </center>
            <div>
                {del.map((item, index) => {
                    return (
                        
                        <div className='cartProducttt'>
                            {()=>addPrices(item.prices)}
                            <div>
                            <h1  className='productheading'>{index}</h1>
                            <h1  className='productheading'>{item.productName}</h1>
                            </div>
                            <div>
                            <h1 style={{color:"#00e33d", marginRight:"1rem"}}  className='productheading'>₹{item.prices}</h1>
                            <button onClick={() => DelectIndivial(item)}>Delete</button>
                            
                            </div>
                        </div>

                    )
                })}
                <center>
                <button className="deleteAll " onClick={delectBtn}>Delete All</button>
                </center>
            </div>
        
        </>
    )
}