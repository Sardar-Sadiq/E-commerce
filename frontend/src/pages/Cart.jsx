import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
const Cart = () => {

  const { products, cartItems, currency} = useContext(ShopContext);

  return (
    <div>
      
    </div>
  )
}

export default Cart
