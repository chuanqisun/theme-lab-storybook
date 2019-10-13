import { text, object, select } from '@storybook/addon-knobs';

export const heroData = {
  image: {
    src: 'https://via.placeholder.com/1440X500',
    sources: [
      { media: '(max-width: 400px)', srcSet: 'https://via.placeholder.com/400X720' },
      { media: '(max-width: 600px)', srcSet: 'https://via.placeholder.com/600X800' },
      { media: '(max-width: 800px)', srcSet: 'https://via.placeholder.com/800X600' },
      { media: '(max-width: 1200px)', srcSet: 'https://via.placeholder.com/1200X600' },
    ],
  },
  textAlignment: 'top-left',
  title: 'Heading',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  links: [{ label: 'Shop now' }],
};

export const heroDataMultiLink = {
  ...heroData,
  links: [{ label: 'Show men' }, { label: 'Shop women' }],
};

export const knobify = (data = heroData) => ({
  title: text('Title', data.title),
  body: text('Body', data.body),
  links: object('Links', data.links),
  imageSrc: data.image.src, // Dimensions from media server. Not adjustable.
  imageSources: data.image.sources, // Dimensions from media server. Not adjustable.
  textAlignment: select('Text alignment', ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right']),
});
