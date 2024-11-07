import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepagefunction from './homepage';
import Navbar from './Navbar/navbar';

export default function reactAppFunction(){
    return(
        <>
        <Navbar></Navbar>
        <Homepagefunction></Homepagefunction>
        </>
    )
}