import React from 'react';
import { productGridData } from './product-grid.data';
import { ProductCard } from '../../components/product-card';
import { Grid } from '../../components/grid';

export const ProductGrid = ({
  products = productGridData.products,
  showRating = productGridData.showRating,
  showDescription = productGridData.showDescription,
  ...props
}) => (
    <Grid>
      {products.map((product, i) => {
        const { name, price, originalPrice } = product;
        const rating = showRating ? product.rating : undefined;
        const description = showDescription ? product.description : undefined;

        return <ProductCard key={i} name={name} originalPrice={originalPrice} price={price} rating={rating} description={description} />;
      })}
    </Grid>
  );
