import branchSlice from "@/redux/branchSlice";
import categorySlice from "@/redux/categorySlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        category: categorySlice,
        branch: branchSlice,
    }
})