import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js';

const appStore = configureStore({
    reducer:{
        cart: cartReducer 
    }
}) // will give us our store of react application 

export default appStore; 