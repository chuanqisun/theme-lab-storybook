import { text } from '@storybook/addon-knobs';

export const cardData = {
  image: {
    src: 'https://via.placeholder.com/352X432',
    sources: [],
  },
  heading: 'Heading',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const cardDataNoHeading = {
  ...cardData,
  heading: '',
};

export const knobify = (data = cardData) => ({
  ...data,
  body: text('Body', data.body),
  heading: text('Heading', data.heading),
});
