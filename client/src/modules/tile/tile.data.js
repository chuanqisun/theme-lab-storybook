import { text, array } from '@storybook/addon-knobs';

export const tileData = {
  image: {
    src: 'https://via.placeholder.com/352X432',
    sources: [],
  },
  heading: 'Heading',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  links: ['Shop now', 'Learn more'],
};

export const tileDataNoHeading = {
  ...tileData,
  heading: '',
};

export const knobify = (data = tileData) => ({
  ...data,
  body: text('Body', data.body),
  heading: text('Heading', data.heading),
  links: array('Links', data.links),
});
