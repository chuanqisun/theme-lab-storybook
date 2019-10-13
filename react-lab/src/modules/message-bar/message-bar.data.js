import { array } from '@storybook/addon-knobs';

export const messageBarData = {
  messages: ['Message 1/3', 'Message 2/3', 'Message 3/3'],
};

export const knobify = (data = messageBarData) => ({
  messages: array('Messages', data.messages),
});
