import React, { useRef, useState } from 'react'

import ProductCart from '../product-card/ProductCard';

import productData from '../../assets/fake-data/products';

import './listProduct.scss';

const listProductItem = {
  categoryProducts:["Đồ điện tử 01","Đồ điện tử 02", "Đồ điện tử 03"],
  colorProducts: ["white","red", "pink", "black", "yellow", "orange", "blue"],
  sizeProducts: ["S","M","L","XL","XXL"],
}


const ListProduct = () => {

  const selectProduct = useRef(null);
  const [valueProperty,setValueProterty] = useState({
    category: [],
    color: [],
    size: [],
  });

  const onSelectProduct = () => {
    selectProduct.current.classList.add('active');
  }

  const offSelectProduct = () => {
    selectProduct.current.classList.remove('active');
  }

  const propertyProduct = (e,type) =>{
    switch(type){
      case "category" :
        if(valueProperty.category.includes(e.target.value)){
          
          const value = valueProperty.category.filter((item) => item!==e.target.value);

          setValueProterty({
            ...valueProperty,
            category: value,
          })
        }else{
          setValueProterty({
            ...valueProperty,
            category: [...valueProperty.category,e.target.value],
          })
        }
        break;
      case "color":
        if(valueProperty.color.includes(e.target.value)){
          
          const value = valueProperty.color.filter((item) => item!==e.target.value);
          setValueProterty({
            ...valueProperty,
            color: value,
          })
        }else{
          setValueProterty({
            ...valueProperty,
            color: [...valueProperty.color,e.target.value],
          })
        }
        break;
      case "size":
        if(valueProperty.size.includes(e.target.value)){
          
          const value = valueProperty.size.filter((item) => item!==e.target.value);

          setValueProterty({
            ...valueProperty,
            size: value,
          })
        }else{
          setValueProterty({
            ...valueProperty,
            size: [...valueProperty.size,e.target.value],
          })
        }
        break;
      default:
        return valueProperty;
    }
  } 

  const onClearMenu = () => { 
    setValueProterty({
      category:[],
      color: [],
      size: [],
    })
  }

  return (
    <div className="list-product">
      <div className='list-product__icon'
          onClick={onSelectProduct}
      >
          <button>Bộ chọn</button>
      </div>
      <div ref={selectProduct} className='list-product__menu'>
        <div className='list-product__menu__icon'
            onClick={offSelectProduct}
        >
          <i className='bx bx-left-arrow-alt'></i>
        </div>
        <ul className='list-product__menu__item'>
          <h5>Danh mục sản phẩm</h5>
          {
            listProductItem.categoryProducts.map((item,i)=>(
              <li key={i}>
                <input type="checkbox" value={item} 
                    onChange={(e)=> propertyProduct(e,"category")}
                    checked={valueProperty.category.includes(item)}
                /> {item}
              </li>
            ))
          }
        </ul>
        <ul className='list-product__menu__item'>
          <h5>Màu sắc</h5>
          {
            listProductItem.colorProducts.map((item,i)=>(
              <li key={i}>
                <input type="checkbox" value={item} 
                  onChange={(e)=> propertyProduct(e,"color")}
                  checked={valueProperty.color.includes(item)}
                /> {item}
              </li>
            ))
          }
        </ul>
        {/* <ul className='list-product__menu__item'>
          <h5>Kích cỡ</h5>
          {
            listProductItem.sizeProducts.map((item,i)=>(
              <li key={i}>
                <input type="checkbox" value={item} 
                      onChange={(e)=> propertyProduct(e,"size")}
                      checked={valueProperty.size.includes(item)}
                /> {item}
              </li>
            ))
          }
        </ul> */}
        <button onClick={onClearMenu}>Bỏ chọn</button>
      </div>
      <div className='list-product__item'>
          <ProductCart 
            item={productData.getAllProducts()} 
            className="layout--three" 
            sreachProduct = {valueProperty}
          />
      </div>
    </div>
  )
}

export default ListProduct