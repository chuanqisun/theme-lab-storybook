import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { containerData, containerDataClampedWithPadding, containerDataFullWithPadding, knobify } from './container.data';
import { Container } from './container.module';
import notes from './container.notes.md';

export default { title: 'Modules/Container', decorators: [withKnobs], parameters: { notes } };

const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam. Fames ac turpis egestas sed tempus urna et. Morbi tristique senectus et netus et malesuada fames ac turpis. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Ullamcorper malesuada proin libero nunc. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. At volutpat diam ut venenatis tellus. Egestas sed tempus urna et. Ornare massa eget egestas purus viverra accumsan in nisl. Molestie nunc non blandit massa enim nec. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Suspendisse faucibus interdum posuere lorem. Nam at lectus urna duis convallis. Id ornare arcu odio ut. Felis eget velit aliquet sagittis id consectetur. Massa tempor nec feugiat nisl pretium fusce. Sed augue lacus viverra vitae congue eu consequat. Sit amet justo donec enim diam vulputate ut pharetra.`;

export const fullBleed = () => <Container {...knobify(containerData)}>{sampleText}</Container>;
export const fullBleedWithPadding = () => <Container {...knobify(containerDataFullWithPadding)}>{sampleText}</Container>;
export const clampedWithPadding = () => <Container {...knobify(containerDataClampedWithPadding)}>{sampleText}</Container>;
