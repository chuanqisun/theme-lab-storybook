import React from 'react';
import { cartData } from './cart.data';
import { CartItem } from '../../components/cart-item';

export const Cart = ({
  body = cartData.body,
  ...props
}) => (
    <div className="m-cart">
      <div className="m-cart__items">
        <hr className="m-cart__divider" />
        <CartItem />
        <hr className="m-cart__divider" />
        <CartItem />
        <hr className="m-cart__divider" />
        <CartItem />
        <hr className="m-cart__divider" />
      </div>
      <div className="m-cart__summary">
        Order summary (<abbr title="For placement only">FPO</abbr>)
      </div>
    </div>
  );
