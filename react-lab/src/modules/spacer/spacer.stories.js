import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Spacer } from './spacer.module';
import notes from './spacer.notes.md';

export default { title: 'Modules/Spacer', decorators: [withKnobs], parameters: { notes } };

const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const basic = () => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `
    .m-spacer {
        background-color: rgba(255,0,0,0.5);
    }
    `,
      }}
    />
    <div>{sampleText}</div>
    <Spacer />
    <div>{sampleText}</div>
  </>
);
