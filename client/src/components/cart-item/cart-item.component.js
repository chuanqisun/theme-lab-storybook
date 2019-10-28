import React from 'react';

export const CartItem = props => (
  <div className="c-cart-line-item">
    <img src="https://via.placeholder.com/160X240" alt="" />
    <div>Product name</div>
    <div>Color: Honey</div>
    <div>Size: XXS</div>
    <div>Unit price: $109.99</div>
    <input defaultValue="1" type="number"></input>
    <div>
      <del>$109.99</del>
      <ins>$104.99</ins>
    </div>
    <label>
      <input type="radio" />
      <div>Ship</div>
      <div>In stock · ships within 3 business days</div>
    </label>
    <label>
      <input type="radio" />
      <div>Pick up in store</div>
      <div>Fabrikam Bellevue Square</div>
    </label>
    <button>Move to wishlist</button>
    <button>Remove</button>
  </div>
);
