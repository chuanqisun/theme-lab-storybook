import { array, number } from '@storybook/addon-knobs';

export const messageBarData = {
  messages: ['Message content'],
  slideInterval: 0,
};

export const messageBarDataMultiple = {
  ...messageBarData,
  messages: ['Message 1 of 3', 'Message 2 of 3', 'Message 3 of 3'],
  slideInterval: 3000,
};

export const knobify = (data = messageBarData) => ({
  messages: array('Messages', data.messages),
  slideInterval: number('Slide interval (ms)', data.slideInterval, { min: 3000, max: 10000, step: 1000 }),
});
