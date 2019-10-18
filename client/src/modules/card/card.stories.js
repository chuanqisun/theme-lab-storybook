import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { cardData, knobify } from './card.data';
import { Card } from './card.module';
import { Columns, columnsData1To1To1 } from '../columns';
import notes from './card.notes.md';

export default { title: 'Modules/Card', decorators: [withKnobs], parameters: { notes } };

export const basic = () => (
  <Columns {...columnsData1To1To1}>
    <Card {...knobify(cardData)} />
    <Card {...knobify(cardData)} />
    <Card {...knobify(cardData)} />
  </Columns>
);
