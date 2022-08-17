import { createSlice } from "@reduxjs/toolkit";

import {v4 as uuid} from 'uuid';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        listCart: [],
    },
    reducers: {
        addCart(state,action){
            state.listCart.push({
                id: uuid(),
                cart: action.payload.product,
                color: action.payload.color,
                size: action.payload.size,
                amount: action.payload.amount,
            })

            const itemCart =localStorage.getItem('cart') ?  JSON.parse(localStorage.getItem('cart')) : [];
            
            const item = [...itemCart,{
                id: uuid(),
                cart: action.payload.product,
                color: action.payload.color,
                size: action.payload.size,
                amount: action.payload.amount,
            }] 

            
            localStorage.setItem('cart',JSON.stringify(item));
        },
        deleteCart(state,action){
            state.listCart = state.listCart.filter(item => item.id!==action.payload);
            localStorage.setItem('cart',JSON.stringify(state.listCart));
        },
        augmentAmountCart(state,action){
            state.listCart.map(item => {
                if(item.id === action.payload.id){
                    item.amount +=1;
                }
                return item;
            })
        },
        reductionAmountCart(state,action){
            state.listCart.map(item => {
                if(item.id === action.payload.id){
                    item.amount -=1;
                }
                return item;
            })
        }
    }
})

export const {addCart,deleteCart,augmentAmountCart,reductionAmountCart} = cartSlice.actions;
export default cartSlice.reducer;