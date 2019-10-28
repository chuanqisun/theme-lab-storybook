import React from 'react';
import { productGridData } from './product-grid.data';
import { ProductCard } from '../../components/product-card';

export const ProductGrid = ({ body = productGridData.body, ...props }) => (
  <div className="m-product-grid">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
);
