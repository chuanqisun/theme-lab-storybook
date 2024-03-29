import { text, select, array } from '@storybook/addon-knobs';

export const featureData = {
  image: {
    src: 'https://via.placeholder.com/728X432',
    sources: [],
  },
  layout: 'text-right',
  heading: 'Heading',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  links: ['Shop now'],
};

export const featureDataTextLeft = {
  ...featureData,
  layout: 'text-left',
};

export const featureDataTextBottomMultiLink = {
  ...featureData,
  layout: 'text-bottom',
  links: ['Shop men', 'Shop women'],
};

export const knobify = (data = featureData) => ({
  ...data,
  heading: text('Heading', data.heading),
  links: array('Links', data.links),
  layout: select('Layout', ['text-right', 'text-left', 'text-bottom'], data.layout),
});
