import React from 'react';
import { containerData } from './container.data';

export const Container = ({
  body = containerData.body,
  ...props
}) => (
  <div className="m-container">{body}</div>
);
