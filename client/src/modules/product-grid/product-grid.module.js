import React from 'react';
import { productGridData } from './product-grid.data';
import { ProductCard } from '../../components/product-card';
import { Grid } from '../../components/grid';

export const ProductGrid = ({ products = props.propducts, showRating = props.showRating, showDescription = props.showDescription, ...props }) => (
  <Grid>
    {products.map(product => {
      const { name, price, originalPrice } = product;
      const rating = showRating ? product.rating : undefined;
      const description = showDescription ? product.description : undefined;

      return <ProductCard name={name} originalPrice={originalPrice} price={price} rating={rating} description={description} />;
    })}
  </Grid>
);
