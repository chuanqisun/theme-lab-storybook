import React from 'react';
import { containerData } from './container.data';

export const Container = ({ layout = containerData.layout, ...props }) => (
  <div className={`m-container ${layout}`}>{props.children}</div>
);
