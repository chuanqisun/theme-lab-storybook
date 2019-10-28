import { text } from '@storybook/addon-knobs';

export const filtersData = {
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};


export const knobify = (data = filtersData) => ({
  ...data,
  body: text('Body', data.body),
});
