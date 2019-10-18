import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { footerData, knobify } from './footer.data';
import { Footer } from './footer.module';
import notes from './footer.notes.md';

export default { title: 'Modules/Footer', decorators: [withKnobs], parameters: { notes } };

export const basic = () => <Footer {...knobify(footerData)} />;
