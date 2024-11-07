import React from 'react';
import "./homepage.css"
import Card from "./Cards/card.jsx";
import Navbar from './Navbar/navbar.jsx';
export default function Homepagefunction() {
    return (
                <div className="maine">
                    <Navbar></Navbar>
                    <center>
                    <div className='cardse'>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                    </center>
                </div>
    )
}