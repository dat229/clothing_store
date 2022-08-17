import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import './productCard.scss';
import {setSlug} from './productCardSlice';

const ProductCard = (props) => {
    let temp = props.item;
  
  const itemss = useCallback(() => {
    if(props.sreachProduct.category.length > 0){
      temp = temp.filter(e => {
          let cate = props.sreachProduct.category.filter((item) => 
          e.title.toLowerCase().includes(item.toLowerCase()))
        
          if(cate.length>0){
            return e;
          }
          })
    }

    if(props.sreachProduct.color.length > 0) {
        temp = temp.filter(e => {
          let color = e.colors.filter((item)=>
                props.sreachProduct.color.includes(item))
          if(color.length=== props.sreachProduct.color.length){
            return e;
          }
        } )
    }

    if(props.sreachProduct.size.length > 0) { 
      temp = temp.filter(e => {
        let sizes = e.size.filter((item)=>
              props.sreachProduct.size.includes(item.toUpperCase()))
        if(sizes.length === props.sreachProduct.size.length){
          return e;
        }
      } )
    }

  },[props.sreachProduct])
  
  if(props.sreachProduct) itemss();

  const items = props.sreachProduct ? temp : props.item;
    
    return (
      <>
        {props.title ? <h3 className='product__card--title'>{props.title}</h3> : '' }
        <div className={`product__card ${props.className ? props.className : ''}`}>
            {
                items.map((item,i)=>(
                    <ProductItem key={i} item={item} />
                ))
            }
        </div>
      </>
  )
}

const ProductItem = (props) => {

  const dispath = useDispatch();

  function formatCash(str) {
    return str.split('').reverse().reduce((init,next,index) => {
      return ((index % 3) ? next : next+',')+init;
    })
  }

  const onShowItem = () => {
    dispath(setSlug(props.item.slug));
  }

    return (
      <div className='product__card__item'>
          <Link to={`/product/${props.item.slug}`} className="product__card__item--link">
            <div className='product__card__item__image'>
                  <div className='product__card__item__image--img01'>
                    <img src={props.item.image01}  alt=""/>
                  </div>
                  <div className='product__card__item__image--img02'>
                    <img src={props.item.image02}  alt=""/>
                  </div>    
            </div> 
            <span className='product__card__item__title'>{props.item.title}</span>
            <div className='product__card__item__price'>
                <span className='product__card__item__price--read'>{formatCash(props.item.price)}</span>    
                <span>{formatCash('399000')}</span>    
            </div>
          </Link>
          <Button 
              className="small"
              title="chọn mua"
              icon="bx bx-cart"
              onclick = {onShowItem}
              class = "positions"
          />
      </div>
    )
  }

export default ProductCard