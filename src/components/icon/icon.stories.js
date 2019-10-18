import React from 'react';
import { Icon } from './icon.component';
import notes from './icon.notes.md';

export default { title: 'Components/Icon', parameters: { notes } };

export const fullIst = () => (
  <>
    <Icon name="cart" />
    <Icon name="wishlist" />
    <Icon name="search" />
  </>
);

export const withoutText = () => (
  <a href="javascript:void(0)">
    <Icon name="cart" label="Bag items"></Icon>(12)
  </a>
);

export const withText = () => (
  <a href="javascript:void(0)">
    <Icon name="wishlist"></Icon>Wishlist
  </a>
);
