import React from 'react';
import { containerData } from './container.data';

export const Container = ({ fullBleed = containerData.fullBleed, ...props }) => (
  <div className={`m-container${fullBleed ? ' full-bleed' : ''}`}>{props.children}</div>
);
