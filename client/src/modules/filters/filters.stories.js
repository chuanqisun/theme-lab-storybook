import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { filtersData, knobify } from './filters.data';
import { Filters } from './filters.module';
import notes from './filters.notes.md';

export default { title: 'Modules/Filters', decorators: [withKnobs], parameters: { notes } };

export const basic = () => <Filters {...knobify(filtersData)} />;
