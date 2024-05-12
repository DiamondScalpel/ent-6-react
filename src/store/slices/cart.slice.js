import { createSlice } from "@reduxjs/toolkit";
import getToken from "../../utils/getToken";
import axios from "axios";
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';

const cart = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        setCart: (_value, action) => action.payload,
        addCart: (value, action) => [...value, action.payload],
        delCart: (value, action) => value.filter(
            prod => prod.id !== action.payload
        ), 
    }
});

export const { setCart } = cart.actions;

export default cart.reducer;

export const getCartThunk = (path) => (dispatch) => {
    const url = `${urlBase}${path}}`;
    axios.get(url, getToken())
        .then(res => dispatch(setCart(res.data)))
        .catch(err => console.log(err));
}

export const postCartThunk = (path, data) => dispatch => {
    const url = `${urlBase}${path}}`;
    axios.post(url, data, getToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}
