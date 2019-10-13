import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { heroData, heroDataMultiLink, knobify } from './hero.data';
import notes from './hero.notes.md';

export default { title: 'Module/Hero', decorators: [withKnobs], parameters: { notes } };

import { Hero } from './hero.module';

export const basic = () => <Hero {...knobify(heroData)} />;
export const multiLink = () => <Hero {...knobify(heroDataMultiLink)} />;
