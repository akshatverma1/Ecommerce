import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepagefunction from './homepage';
import Navbar from './Navbar/navbar';
import ReactAppFunction from './reactApp';
import Moredetails from './MoreDetails/moreDetails';
import Error from './Error/error';
import CartFunction from './Cart/cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fetchapi from './fetchdata';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<ReactAppFunction/>} />
      <Route path="/productDetails" element={<Moredetails/>} />
      <Route path='/cart' element={<CartFunction/>}></Route>
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter> */}
  <Fetchapi/>
  </div>
);


