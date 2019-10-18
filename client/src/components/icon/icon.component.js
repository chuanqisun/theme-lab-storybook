import React from 'react';

export const Icon = ({ name = 'cart', label, ...props }) => (
  <span className={`c-icon c-icon--${name}`} {...props}>
    {label && <span className="c-icon__sr-label">{label}</span>}
  </span>
);
