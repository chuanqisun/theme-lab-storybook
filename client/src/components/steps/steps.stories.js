import React from 'react';
import { Steps } from './steps.component';
import notes from './steps.notes.md';

export default { title: 'Components/Steps', parameters: { notes } };

export const basic = () => <Steps>Hello world!</Steps>;
