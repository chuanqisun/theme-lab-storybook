import React from 'react';
import notes from './button.notes.md';
import { Icon } from '../icon/icon.component';

export default { title: 'Components/Button', parameters: { notes } };

export const boxed = () => <button className="c-btn">Boxed</button>;
export const boxedLink = () => <button className="c-btn">Boxed</button>;
export const boxedWide = () => <button className="c-btn c-btn--wide">Boxed</button>;
export const boxedPrimaryWide = () => <button className="c-btn c-btn--primary c-btn--wide">Primary</button>;
export const boxedPrimaryLinkWide = () => (
  <a className="c-btn c-btn--primary c-btn--wide" href="javascript:void(0)">
    Primary
  </a>
);
export const boxedIconBefore = () => (
  <button className="c-btn c-btn--icon-before">
    <Icon name="cart" label="cart" />
    (99)
  </button>
);
export const boxedIconAfter = () => (
  <button className="c-btn c-btn--icon-after">
    Shop this collection
    <Icon name="go-shop" />
  </button>
);
export const square = () => (
  <button className="c-btn c-btn--square">
    <Icon name="cart" />
  </button>
);
export const squarePrimary = () => (
  <button className="c-btn c-btn--square c-btn--primary">
    <Icon name="cart" />
  </button>
);
export const ghost = () => <button className="c-btn c-btn--ghost">Ghost button</button>;
export const ghostSquare = () => (
  <button className="c-btn c-btn--ghost c-btn--square">
    <Icon name="close" label="close" />
  </button>
);
export const linkButton = () => <button className="c-btn c-btn--link">Move to wishlist</button>;
