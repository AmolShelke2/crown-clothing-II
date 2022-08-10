import React from 'react';

import {
  CartItemContainer,
  CartItemDetailsContainer,
  ImageStyles,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageStyles src={imageUrl} alt="item" />
    <CartItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
