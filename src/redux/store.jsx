import { configureStore } from '@reduxjs/toolkit'
import productCardSelect from '../components/product-card/productCardSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    product: productCardSelect,
    listProductCart: cartSlice,
  },
})