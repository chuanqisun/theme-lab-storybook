import React from 'react';
import { ProductCard } from './product-card.component';
import notes from './product-card.notes.md';

export default { title: 'Components/Product card', parameters: { notes } };

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

export const basic = () => <ProductCard></ProductCard>;
export const withDiscount = () => <ProductCard originalPrice={'$119.98'}></ProductCard>;
export const withRating = () => <ProductCard rating={3.5}></ProductCard>;
export const withDescription = () => <ProductCard description={loremIpsum}></ProductCard>;
export const kitchenSink = () => <ProductCard originalPrice={'$119.98'} rating={3.5} description={loremIpsum}></ProductCard>;
