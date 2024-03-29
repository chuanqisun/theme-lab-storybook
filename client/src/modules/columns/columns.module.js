import React from 'react';
import { columnsData } from './columns.data';

export const Columns = ({ layout = columnsData.layout, fullBleed = columnsData.fullBleed, ...props }) => {
  let layoutClassName = 'ratio-' + layout.replace(/:/g, '-'); // e.g. replace 1:2 to ratio-1-2 for valid CSS class name

  return <div className={`m-columns ${layoutClassName}${fullBleed ? ' full-bleed' : ''}`}>{props.children}</div>;
};
