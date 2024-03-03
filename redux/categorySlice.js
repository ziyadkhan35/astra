import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const initialState = {
//     name: 'Beef',
//     data: [],
//     loading: false,
//     error: '',
// }

// export const fetchMeals = createAsyncThunk('fetchMeals', async () => {
//     const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${initialState.name}`)
//     return response.data.meals
// })

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        name: 'Beef',
    },
    reducers: {
        changeCategory: (state, action) => {
            state.name = action.payload
        },
    },
    // extraReducers: (builder)=>{
    //     builder.addCase(fetchMeals.pending, (state,action)=>{
    //         state.loading = true
    //         state.error = ''
    //     })
    //     builder.addCase(fetchMeals.fulfilled, (state,action)=>{
    //         state.data = action.payload
    //         console.log(state.name);
    //         console.log(state.name);
    //         console.log(state.name);
    //         console.log(initialState.name);
    //         console.log(action.payload);
    //         console.log(action.payload);
    //         console.log(action.payload);
    //         state.loading = false
    //     })
    //     builder.addCase(fetchMeals.rejected, (state,action)=>{
    //         state.loading = false
    //         state.error = 'Error fetching meals data'
    //     })
    // }
})

export default categorySlice.reducer
export const { changeCategory } = categorySlice.actions