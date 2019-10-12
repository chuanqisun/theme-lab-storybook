import { html, storyFrom } from '../utils/story-from';
import { contentCardHeroData, contentCardHalfCardHalfData, contentCardThirdCardData, contentCardFeatureData } from './content-card.data';
import '../styles/index.scss';

export default {
  title: 'Modules/Content card',
  includeStories: ['card', 'feature', 'hero'],
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

export const ContentCardCardLayout = (data = contentCardHalfCardHalfData) => html`
  <div class="m-content-card">
    <img class="img" src="${data.image.src}" />
    <div class="text-container">
      <h2 class="heading">${data.heading}</h2>
      <p class="paragraph">${data.paragraph}</p>
      <div class="actions">
        ${data.actions.map(
          action =>
            html`
              <a href="#">${action}</a>
            `
        )}
      </div>
    </div>
  </div>
`;

export const ContentCardFeatureTextRight = (data = contentCardFeatureData) => {
  return html`
    <div class="m-content-card text-right">
      <img class="img" src="${data.image.src}" />
      <div class="text-container">
        <h2 class="heading">${data.heading}</h2>
        <p class="paragraph">${data.paragraph}</p>
        <div class="actions">
          ${data.actions.map(
            action => html`
              <a href="#" class="c-btn">${action}</a>
            `
          )}
        </div>
      </div>
    </div>
  `;
};

export const ContentCardFeatureTextLeft = (data = contentCardFeatureData) => {
  return html`
    <div class="m-content-card text-left">
      <img class="img" src="${data.image.src}" />
      <div class="text-container">
        <h2 class="heading">${data.heading}</h2>
        <p class="paragraph">${data.paragraph}</p>
        <div class="actions">
          ${data.actions.map(
            action => html`
              <a href="#" class="c-btn">${action}</a>
            `
          )}
        </div>
      </div>
    </div>
  `;
};

export const ContentCardHeroLayout = (data = contentCardHeroData) => html`
  <div class="m-content-card hero">
    <img class="img" src="${data.image.src}" />
    <div class="text-container">
      <h2 class="heading">${data.heading}</h2>
      <p class="paragraph">${data.paragraph}</p>
      <div class="actions">
        ${data.actions.map(
          action => html`
            <a href="#" class="c-btn">${action}</a>
          `
        )}
      </div>
    </div>
  </div>
`;

export const card = storyFrom(html`
  <div class="demo-notes">
    1. This is showing multiple instances of the same module.<br />
    2. The cards should reflow in narrow viewport. The reflow behavior should be handled by the multi-column container and is NOT part of this demo.<br />
    3. Never use these modules in full-bleed layout because the texts have no side padding. They will touch the edge of screen when in full-bleed.
  </div>
  <div class="u-columns">
    ${ContentCardCardLayout()} ${ContentCardCardLayout()}
  </div>
  <div class="u-columns">
    ${ContentCardCardLayout(contentCardThirdCardData)} ${ContentCardCardLayout(contentCardThirdCardData)} ${ContentCardCardLayout(contentCardThirdCardData)}
  </div>
`);

export const feature = storyFrom(html`
  ${ContentCardFeatureTextRight()} ${ContentCardFeatureTextLeft()}
`);

export const hero = storyFrom(ContentCardHeroLayout());
