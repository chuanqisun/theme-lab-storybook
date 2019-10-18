import React from 'react';

export const Icon = ({ name = 'cart', label }) => <span className={`c-icon ${name}`}>{label && <span className="sr-label">{label}</span>}</span>;
