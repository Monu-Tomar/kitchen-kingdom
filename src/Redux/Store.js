import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlices";
import CatagorySlice from "./Slices/CategorySlice";
import SearchSlice from "./Slices/SearchSlice"

const Store = configureStore({
    reducer:{
        cart: CartSlice,
        category: CatagorySlice,
        search: SearchSlice,
    },
});
export default Store;