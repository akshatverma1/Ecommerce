import React from 'react';
import axios from "axios";
import { useState } from 'react';
export default function Fetchapi(){
    let url ="https://dummyjson.com/products";
    let [datas,setDatas]= useState([]);

    async function fetch (){
        try{
            let appp = await axios.get(url);
            setDatas(appp.data.products);
            console.log(appp.data.products);
        } catch(err){
            console.log(err);
        }
    }
    fetch();
    console.log("akshat");
    console.log("");
    return(
        <>

        {/* <h1 style={{color:"white"}}>{}</h1> */}

        {datas.map((item,index)=>{
            return(<h1 >{item.id}</h1>)
            
        })}
        </>
    )
}