import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { columnsData, columnsData1To1To1, knobify, columnsData1To2, columnsData2To1 } from './columns.data';
import { Columns } from './columns.module';
import notes from './columns.notes.md';

export default { title: 'Modules/Columns', decorators: [withKnobs], parameters: { notes } };

const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const ratio1To1 = () => (
  <Columns {...knobify(columnsData)}>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
  </Columns>
);

export const ratio1To1To1 = () => (
  <Columns {...knobify(columnsData1To1To1)}>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
  </Columns>
);

export const ratio1To2 = () => (
  <Columns {...knobify(columnsData1To2)}>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
  </Columns>
);

export const ratio2To1 = () => (
  <Columns {...knobify(columnsData2To1)}>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
  </Columns>
);
