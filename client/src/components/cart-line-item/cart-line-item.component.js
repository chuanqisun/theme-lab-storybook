import React from 'react';

export const CartLineItem = props => (
  <div className="c-cart-line-item">
    <img src="https://via.placeholder.com/160X240" alt="" />
    <div>Brand name</div>
    <div>Product name</div>
    <div>Color: Honey</div>
    <div>Size: XXS</div>
    <div>#8349315</div>
    <div>
      <del>$109.99</del>
      <ins>$104.99</ins>
    </div>
    <input defaultValue="5" type="number"></input>
    <button>Remove</button>
    <button>Save for later</button>
    <div>$524.95</div>
  </div>
);
