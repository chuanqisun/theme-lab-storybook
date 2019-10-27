import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { featureData, knobify, featureDataTextLeft, featureDataTextBottomMultiLink } from './feature.data';
import { Feature } from './feature.module';
import notes from './feature.notes.md';

export default { title: 'Modules/Feature', decorators: [withKnobs], parameters: { notes } };

export const textRight = () => <Feature {...knobify(featureData)} />;
export const textLeft = () => <Feature {...knobify(featureDataTextLeft)} />;
export const textBottomMultiLink = () => <Feature {...knobify(featureDataTextBottomMultiLink)} />;
