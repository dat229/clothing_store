import React, { useEffect } from 'react'

import DetailItem from '../components/detail-item/DetailItem';

import ProductCard from '../components/product-card/ProductCard';

import productData from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';

const ProductItem = () => {

  const param = useParams();
  
  useEffect(()=> {
      window.scroll(0,0);
    },[param.slug])
  

  const listProduct = productData.getProducts(8);
  const product = productData.getProductBySlug(param.slug);

  return (
    <div className='detail-product'>
      <DetailItem product={product} />
      <div className='detail-product__list'>
          <ProductCard item={listProduct} title="Khám phá thêm" />
      </div>
    </div>
  )
}

export default ProductItem