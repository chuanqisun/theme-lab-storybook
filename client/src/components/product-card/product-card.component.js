import React from 'react';

const defaultImage = 'https://via.placeholder.com/224X316';
const defaultName = 'Product name';
const defaultPrice = '$100.98';
const defaultOriginalPrice = undefined;
const defaultDescription = undefined;
const defaultRating = undefined;

export const ProductCard = ({
  image = defaultImage,
  name = defaultName,
  price = defaultPrice,
  originalPrice = defaultOriginalPrice,
  description = defaultDescription,
  rating = defaultRating,
}) => (
  <div className="c-product-card">
    <img className="c-product-card__image" src={image} />
    <div className="c-product-card__name">{name}</div>
    <div className="c-product-card__price-container">
      {/* Use <s> instead of <del> based on semantics. The original price is never deleted. It is just outdated. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s */}
      {originalPrice && <s className="c-product-card__original-price">{originalPrice}</s>}
      <span className="c-product-card__price">{price}</span>
    </div>
    {description && <p className="c-product-card__description">{description}</p>}
    {rating && <div className="c-product-card__rating">{rating}</div>}
  </div>
);
