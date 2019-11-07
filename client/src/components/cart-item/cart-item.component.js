import React from 'react';

export const CartItem = props => (
  <div className="c-cart-item">
    <div className="c-ci__image-container">
      <img className="c-ci__image" src="https://via.placeholder.com/160X240" alt="" />
    </div>
    <div className="c-ci__content-container">
      <div className="c-ci__product-info">
        <div className="c-ci__brand-name">Brand name</div>
        <div className="c-ci__product-name">Product name</div>
        <dl className="c-ci__dimensions">
          <div className="c-ci__dimension"><dt>Color</dt><dd>Honey</dd></div>
          <div className="c-ci__dimension"><dt>Size</dt><dd>XXS</dd></div>
          <div className="c-ci__dimension"><dt>Unit price</dt><dd>$109.99</dd></div>
        </dl>
      </div>
      <div className="c-ci__quantity-info">
        <select className="c-ci__quantity" name="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="c-ci__price-info">
        <s className="c-ci__price-old">$109.99</s>
        <span className="c-ci__price-current">$104.99</span>
      </div>
      <div className="c-ci__shipping-info">
        <div className="c-ci__shipping-option">
          <input name="method" id="method-ship" type="radio" />
          <label htmlFor="method-ship">
            <div>Ship</div>
            <div>In stock · ships within 3 business days</div>
          </label>
        </div>
        <div className="c-ci__shipping-option">
          <input name="method" id="method-pickup" type="radio" />
          <label htmlFor="method-pickup">
            <div>Pick up in store</div>
            <div>Fabrikam Bellevue Square</div>
          </label>
        </div>
      </div>
      <div className="c-ci__actions">
        <button className="c-btn c-btn--link">Move to wishlist</button>
        <button className="c-btn c-btn--link">Remove</button>
      </div>
    </div>
  </div>
);
