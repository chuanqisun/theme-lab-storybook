import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Spacer } from './spacer.module';
import notes from './spacer.notes.md';

export default { title: 'Modules/Spacer', decorators: [withKnobs], parameters: { notes } };

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
    <Spacer />
    <br />
    <Spacer />
    <br />
    <Spacer />
    <br />
    <Spacer />
  </>
);
