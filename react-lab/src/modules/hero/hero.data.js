import { text, select, array } from '@storybook/addon-knobs';

export const heroData = {
  image: {
    src: 'https://via.placeholder.com/1440X500',
    sources: [
      { media: '(max-width: 400px)', srcSet: 'https://via.placeholder.com/400X500' },
      { media: '(max-width: 600px)', srcSet: 'https://via.placeholder.com/600X500' },
      { media: '(max-width: 800px)', srcSet: 'https://via.placeholder.com/800X500' },
      { media: '(max-width: 1200px)', srcSet: 'https://via.placeholder.com/1200X500' },
    ],
  },
  textAlignment: 'top-left',
  title: 'Heading',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  links: ['Shop now'],
};

export const heroDataMultiLink = {
  ...heroData,
  links: ['Show men', 'Shop women'],
};

export const heroDataBodyless = {
  ...heroData,
  body: '',
  textAlignment: 'center',
};

export const heroDataLinksOnly = {
  ...heroData,
  title: '',
  body: '',
  textAlignment: 'bottom',
};

export const knobify = (data = heroData) => ({
  title: text('Title', data.title),
  body: text('Body', data.body),
  links: array('Links', data.links),
  imageSrc: data.image.src, // Dimensions from media server. Not adjustable by author.
  imageSources: data.image.sources, // Dimensions from media server. Not adjustable by author.
  textAlignment: select(
    'Text alignment',
    ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right'],
    data.textAlignment
  ),
});
