import { createSlice } from "@reduxjs/toolkit"


const cart = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        setCart: (_value, action) => action.payload,
    }
});

export const { setCart } = cart.actions;

export default cart.reducer;
