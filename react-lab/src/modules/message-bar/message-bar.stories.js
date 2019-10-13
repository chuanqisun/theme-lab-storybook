import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { messageBarData, messageBarDataMultiple, knobify } from './message-bar.data';
import notes from './message-bar.notes.md';

export default { title: 'Module/Message bar', decorators: [withKnobs], parameters: { notes } };

import { MessageBar } from './message-bar.module';

export const basic = () => <MessageBar {...knobify(messageBarData)} />;
export const multiMessage = () => <MessageBar {...knobify(messageBarDataMultiple)} />;
