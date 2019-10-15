import { text } from '@storybook/addon-knobs';

export const headerData = {
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};


export const knobify = (data = headerData) => ({
  body: text('Body', data.body),
});
