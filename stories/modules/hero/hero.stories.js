import { html, storyFrom, htmlToElement } from '../../utils/story-from';
import { contentCardHeroData } from './hero.data';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import '../../styles/index.scss';

export default {
  title: 'Modules/Hero',
  includeStories: ['hero'],
  decorators: [withKnobs],
};

export const CardImg = ({ dimension } = { dimension: '1440X500' }) => html`
  <img class="m-content-card__img" src="https://via.placeholder.com/${dimension}" />
`;
export const CardHeading = () => html`
  <h2 class="m-content-card__heading">Card heading</h2>
`;
export const CardParagraph = () => html`
  <p class="m-content-card__paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
`;
export const CardActions = () => html`
  <div class="m-content-card__actions">
    <a href="#" class="m-content-card__action">Call to action</a>
  </div>
`;

export const ContentCardHeroLayout = data => html`
  <div class="m-content-card hero">
    <img class="img" src="${data.image.src}" />
    <div class="text-container">
      <h2 class="heading">${data.heading}</h2>
      <p class="paragraph">ppppp</p>
    </div>
  </div>
`;

const getData = () => ({
  image: {
    src: 'https://via.placeholder.com/1440X500',
  },
  heading: text('Heading', 'Here comes the hero'),
});

export const hero = () => htmlToElement(ContentCardHeroLayout, getData());
