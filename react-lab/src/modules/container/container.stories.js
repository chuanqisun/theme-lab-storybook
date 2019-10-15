import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { containerData, knobify } from './container.data';
import { Container } from './container.module';
import notes from './container.notes.md';

export default { title: 'Modules/Container', decorators: [withKnobs], parameters: { notes } };

export const basic = () => <Container {...knobify(containerData)} />;
