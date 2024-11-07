import React from 'react';
import "./homepage.css"
import Card from "./Cards/card.jsx";
import Navbar from './Navbar/navbar.jsx';
export default function Homepagefunction() {
    let data = [{
        id: 1,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    },
    {
        id: 2,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    },
    {
        id: 3,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    },
    {
        id: 4,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    },
    {
        id: 5,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    },
    {
        id: 6,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    },
    {
        id: 7,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    }, {
        id: 8,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    }, {
        id: 9,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    }, {
        id: 10,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    }, {
        id: 11,
        productName: "Iphone 16",
        prices: "₹70000",
        description: "The iPhone is a series of smartphones made by Apple Inc. since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi",
    }];
    return (<>
       
        <div className="maine">
            <center>
                <div className='cardse'>
                    {data.map((item, index) => (
                        <Card id={item.id} productName={item.productName} description={item.description} productPrices = {item.prices}></Card>
                    ))}
                </div>
            </center>
        </div>
    </>
    )
}