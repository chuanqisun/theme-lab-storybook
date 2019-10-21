import React from 'react';
import { CartLineItem } from './cart-line-item.component';
import notes from './cart-line-item.notes.md';

export default { title: 'Components/Cart line item', parameters: { notes } };

export const kitchenSink = () => <CartLineItem>Hello world!</CartLineItem>;
