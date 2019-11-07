import React from 'react';

export const Grid = props => (
  <div className="c-grid">
    <div className="c-grid__cells">
      {React.Children.map(props.children, (child, i) => (
        <div key={i} className="c-grid__cell">{child}</div>
      ))}
    </div>
  </div>
);
