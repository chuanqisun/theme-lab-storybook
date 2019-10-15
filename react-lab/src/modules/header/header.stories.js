import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { headerData, knobify } from './header.data';
import { Header } from './header.module';
import notes from './header.notes.md';

export default { title: 'Modules/Header', decorators: [withKnobs], parameters: { notes } };

export const basic = () => <Header {...knobify(headerData)} />;