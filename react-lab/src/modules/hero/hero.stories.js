import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { heroData, heroDataMultiLink, knobify, heroDataBodyless, heroDataLinksOnly } from './hero.data';
import notes from './hero.notes.md';

export default { title: 'Modules/Hero', decorators: [withKnobs], parameters: { notes } };

import { Hero } from './hero.module';

export const basic = () => <Hero {...knobify(heroData)} />;
export const multiLink = () => <Hero {...knobify(heroDataMultiLink)} />;
export const bodyless = () => <Hero {...knobify(heroDataBodyless)} />;
export const linkOnly = () => <Hero {...knobify(heroDataLinksOnly)} />;
