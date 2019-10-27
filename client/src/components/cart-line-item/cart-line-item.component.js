import React from 'react';

export const CartLineItem = props => (
  <div className="c-cart-line-item">
    <img src="https://via.placeholder.com/160X240" alt="" />
    <div>Brand name</div>
    <div>Product name</div>
    <div>Color: Honey</div>
    <div>Size: XXS</div>
    <div>#8349315</div>
    <input defaultValue="5" type="number"></input>
    <div>
      <del>$109.99</del>
      <ins>$104.99</ins>
    </div>
    <input type="radio" />
    <label>
      <div>Ship</div>
      <div>In stock · ships within 3 business days</div>
    </label>
    <input type="radio" />
    <label>
      <div>Pick up in store</div>
      <div>Fabrikam Bellevue Square</div>
    </label>
    <button>Remove</button>
    <button>Save for later</button>
    <div>$524.95</div>
  </div>
);
