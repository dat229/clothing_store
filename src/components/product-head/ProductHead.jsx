import React from 'react';

import ProductCard from '../product-card/ProductCard';

import propducts from '../../assets/fake-data/products';
import banner from '../../assets/images/banner.jpg';

import './productHead.scss';

const ProductHead = () => {

  const bestSelling = propducts.getProducts(4);
  const newProduct = propducts.getProducts(8);
  const popularProduct = propducts.getProducts(12);

  return (
    <div className='product-head'>
        <div className='product-head__best--selling'>
            <h4 className='product-head--title'>Top Sản Phẩm Bán Chạy Trong Tuần</h4>
            <ProductCard item={bestSelling} />
        </div>
        <div className='product-head__news'>
            <h4 className='product-head--title'>Sản Phẩm Mới</h4>
            <ProductCard item={newProduct} />
        </div>
        <div className='product-head__banner'>
          <img src={banner} alt="banner product" />
        </div>
        <div className='product-head__popular'>
            <h4 className='product-head--title'>Phổ Biến</h4>
            <ProductCard item={popularProduct} />
        </div>
    </div>
  )
}

export default ProductHead