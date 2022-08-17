import React from 'react';

import {Routes,Route} from 'react-router-dom';
import Login from './components/login/Login';
import Cart from './pages/Cart';
import DetailProduct from './pages/DetailProduct'

import Home from './pages/Home';
import Product from './pages/Product';

const Routers = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:slug' element={<DetailProduct />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default Routers;