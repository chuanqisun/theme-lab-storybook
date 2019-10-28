import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { tileData, tileDataNoHeading, knobify } from './tile.data';
import { Tile } from './tile.module';
import { Columns, columnsData1To1To1 } from '../columns';
import notes from './tile.notes.md';

export default { title: 'Modules/Tile', decorators: [withKnobs], parameters: { notes } };

export const basic = () => (
  <Columns {...columnsData1To1To1}>
    <Tile {...knobify(tileData)} />
    <Tile {...knobify(tileData)} />
    <Tile {...knobify(tileData)} />
  </Columns>
);

export const noHeading = () => (
  <Columns {...columnsData1To1To1}>
    <Tile {...knobify(tileDataNoHeading)} />
    <Tile {...knobify(tileDataNoHeading)} />
    <Tile {...knobify(tileDataNoHeading)} />
  </Columns>
);
