import React from 'react';
import { columnsData } from './columns-v2.data';

export const ColumnsV2 = ({ layout = columnsData.layout, columns = columnsData.columns, ...props }) => {
  let columnsClassName = 'ratio-' + columns.replace(/:/g, '-'); // e.g. replace 1:2 to ratio-1-2 for valid CSS class name

  return (
    <div className={`m-columns-v2 ${columnsClassName} ${layout}`}>
      <div className="m-columns-v2__column-container">
        {React.Children.map(props.children, (child, i) => (
          <div key={i} className="m-columns-v2__column">{child}</div>
        ))}
      </div>
    </div>
  )
};