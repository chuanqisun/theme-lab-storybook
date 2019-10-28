import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { productGridData, knobify } from './product-grid.data';
import { ProductGrid } from './product-grid.module';
import notes from './product-grid.notes.md';

export default { title: 'Modules/Product grid', decorators: [withKnobs], parameters: { notes } };

export const basic = () => <ProductGrid {...knobify(productGridData)} />;
