import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';

import DetailItem from '../detail-item/DetailItem';

import productData from '../../assets/fake-data/products';

import './showProduct.scss';

const ShowProduct = () => {
  const selector = useSelector((state)=> state.product.slug);

  const product = productData.getProductBySlug(selector);

  return (
    <div className='show-product'>
        {
          product!== undefined ? <DetailItem product={product} /> : ""
        }
    </div>
  )
}

export default ShowProduct