import React from 'react';
import { featureData } from './feature.data';

export const Feature = ({
  body = featureData.body,
  ...props
}) => (
  <div className="m-feature">{body}</div>
);
