import { text, boolean } from '@storybook/addon-knobs';

const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const productGridData = {
  showRating: false,
  showDescription: false,
  products: [
    { name: 'Product name', originalPrice: undefined, price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: undefined, price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: undefined, price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: undefined, price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: undefined, price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
    { name: 'Product name', originalPrice: '$119.98', price: '$109.98', rating: 3.5, description: sampleText },
  ],
};

export const knobify = (data = productGridData) => ({
  ...data,
  body: text('Body', data.body),
  showRating: boolean('Show rating', data.showRating),
  showDescription: boolean('Show description', data.showDescription),
});
