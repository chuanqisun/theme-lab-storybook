import React from 'react';
import { Grid } from './grid.component';
import notes from './grid.notes.md';

export default { title: 'Components/Grid', parameters: { notes } };

const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const basic = () => (
  <Grid>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
    <div>{sampleText}</div>
  </Grid>
);
