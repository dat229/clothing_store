import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom';

import {augmentAmountCart, reductionAmountCart, deleteCart} from '../redux/cartSlice';

import '../sass/cart.scss';

function formatCash(str) {
    return str.split('').reverse().reduce((init,next,index) => {
        return ((index % 3) ? next : next+',')+init;
    })
}

const Cart = () => {
    window.scroll(0,0);

    const productCart = useSelector((state) => state.listProductCart.listCart);
    
    // const productCart = JSON.parse(localStorage.getItem('cart'));
    // console.log(productCart);
    
    const sumPrice = productCart.reduce((tatol,item)=>{
        return tatol + (Number(item.cart.price)*Number(item.amount));
    },0)

    const sumAmount = productCart.reduce((tatol,item)=>{
        return tatol + Number(item.amount);
    },0)

  return (
    <div className='cart'>
        <div className='cart__statistical'>
            <span>Bạn đang có {sumAmount} sản phẩm trong giỏ hàng</span>
            <div className="cart__statistical__price">
                <span>Thành tiền:</span>
                <span>{formatCash(sumPrice.toString())} đồng</span>
            </div>
            <button>Đặt hàng</button>
            <button><Link to="/">Tiếp tục mua hàng</Link></button>
        </div>
        <div className='cart__content'> 
            {
                (productCart.length > 0) ? productCart.map((item,i) => (
                    <ItemCart key={i} item={item} />       
                )) : ''
            }
        </div>
    </div>
  )
}

const ItemCart = (props) =>{
    const dispath = useDispatch();

    const item = props.item.cart;

    const augmentAmount = () => {
        dispath(augmentAmountCart(props.item))
    }
    const reductionAmount = () => {
        dispath(reductionAmountCart(props.item))
    }

    const deleteCartItem = () => {
        dispath(deleteCart(props.item.id));
    }

    return(
        <div className='cart__content__item'>
            <img src={item.image01} alt="img"/>
            <span>{item.title}</span>
            <span>{formatCash(item.price.toString())}</span>
            <div className='cart__content__item__amount'>
                <span onClick={reductionAmount}>-</span>
                <span>{props.item.amount}</span>
                <span onClick={augmentAmount}>+</span>
            </div>
            <div className='cart__content__item__clear'>
                <i onClick={deleteCartItem} className='bx bx-trash'></i>
            </div>
        </div>
    )
}

export default Cart
