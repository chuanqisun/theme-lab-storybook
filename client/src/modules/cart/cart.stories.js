import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { cartData, knobify } from './cart.data';
import { Cart } from './cart.module';
import notes from './cart.notes.md';

export default { title: 'Modules/Cart', decorators: [withKnobs], parameters: { notes } };

export const basic = () => <Cart {...knobify(cartData)} />;
