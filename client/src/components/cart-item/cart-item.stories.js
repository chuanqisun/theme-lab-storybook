import React from 'react';
import { CartItem } from './cart-item.component';
import notes from './cart-item.notes.md';

export default { title: 'Components/Cart item', parameters: { notes } };

export const kitchenSink = () => <CartItem />;
