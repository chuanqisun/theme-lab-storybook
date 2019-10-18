import React from 'react';

export const Icon = ({ name = 'cart', label }) => (
  <span className={`c-icon c-icon--${name}`}>{label && <span className="c-icon__sr-label">{label}</span>}</span>
);
