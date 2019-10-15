import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { featureData, knobify } from './feature.data';
import { Feature } from './feature.module';
import notes from './feature.notes.md';

export default { title: 'Modules/Feature', decorators: [withKnobs], parameters: { notes } };

export const basic = () => <Feature {...knobify(featureData)} />;
