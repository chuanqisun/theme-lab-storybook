import React from 'react';
import { columnsData } from './columns-v2.data';

export const ColumnsV2 = ({ layout = columnsData.layout, ...props }) => {
  let layoutClassName = 'ratio-' + layout.replace(/:/g, '-'); // e.g. replace 1:2 to ratio-1-2 for valid CSS class name

  return (
    <div className={`m-columns-v2 ${layoutClassName}`}>
      <div className="m-columns-v2__column-container">
        {React.Children.map(props.children, child => (
          <div className="m-columns-v2__column">{child}</div>
        ))}
      </div>
    </div>
  )
};