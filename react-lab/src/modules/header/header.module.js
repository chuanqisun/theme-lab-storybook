import React from 'react';
import { headerData } from './header.data';

export const Header = ({
  body = headerData.body,
  ...props
}) => (
  <div className="m-header">{body}</div>
);
