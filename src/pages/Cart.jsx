import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = () => {

  const cart = useSelector(store => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk('/cart'));
  }, []);
  

  console.log(cart);

  return (
    <div>Cart</div>
  )
}

export default Cart;