import { html, storyFrom } from '../../utils/story-from';
import './content-card.css';

export default {
  title: 'Modules/Content card',
  includeStories: ['cardLayout', 'featureLayout', 'heroLayout'],
};

export const CardImg = () => html`
  <img class="m-content-card__img" src="https://via.placeholder.com/800X600" />
`;
export const CardHeading = () => html`
  <h2 class="m-content-card__heading">Card heading</h2>
`;
export const CardParagraph = () => html`
  <p class="m-content-card__paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
`;
export const CardAction = () => html`
  <a href="#" class="m-content-card__action">Call to action</a>
`;

export const ContentCardCardLayout = () => html`
  <div class="m-content-card m-content-card--limit-width">
    ${CardImg()}
    <div class="m-content-card__text">
      ${CardHeading()} ${CardParagraph()} ${CardAction()}
    </div>
  </div>
`;

export const ContentCardHeroLayout = () => html`
  <div class="m-content-card m-content-card--text-over">
    ${CardImg()}
    <div class="m-content-card__text m-content-card__text--with-padding m-content-card__text--align-center">
      ${CardHeading()} ${CardParagraph()} ${CardAction()}
    </div>
  </div>
`;

export const ContentCardFeatureLayout = () => html`
  <div class="m-content-card m-content-card--text-aside">
    ${CardImg()}
    <div class="m-content-card__text m-content-card__text--with-padding">
      ${CardHeading()} ${CardParagraph()} ${CardAction()}
    </div>
  </div>
`;

export const cardLayout = storyFrom(ContentCardCardLayout());

export const featureLayout = storyFrom(ContentCardFeatureLayout());

export const heroLayout = storyFrom(ContentCardHeroLayout());
