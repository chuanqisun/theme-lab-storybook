import React from 'react';

export const CartItem = props => (
  <div className="c-cart-line-item">
    <img className="c-cli__image" src="https://via.placeholder.com/160X240" alt="" />
    <div className="c-cli__content-container">
      <div className="c-cli__product-info">
        <div>Brand name</div>
        <div>Product name</div>
        <div>Color: Honey</div>
        <div>Size: XXS</div>
        <div>Unit price: $109.99</div>
      </div>
      <input className="c-cli__quantity" defaultValue="1" type="number"></input>
      <div className="c-cli__price-info">
        <div>
          <del>$109.99</del>
          <ins>$104.99</ins>
        </div>
      </div>
      <div className="c-cli__shipping-info">
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
      </div>
      <div className="c-cli__actions">
        <button>Move to wishlist</button>
        <button>Remove</button>
      </div>
    </div>
  </div>
);
