import { html, storyFrom } from '../../utils/story-from';
import "./content-card.css";

export default {
  title: 'Modules/Content card',
};

const img = html`<img class="content-card__img" src="https://via.placeholder.com/800X600">`;
const heading = html`<h2 class="content-card__heading">Card heading</h2>`;
const paragraph = html`<p class="content-card__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
const action = html`<a href="#" class="content-card__action">Call to action</a>`;
const renderAction = (label) => html`<a href="#" class="content-card__action">${label}</a>`;

export const basic = storyFrom(html`
<div class="content-card">
  ${img}
  <div class="content-card__text">
    ${heading}
    ${paragraph}
    ${action}
  </div>
</div>`);

export const textAside = storyFrom(html`
<div class="content-card content-card--text-right">
  ${img}
  <div class="content-card__text content-card__text--with-padding">
    ${heading}
    ${paragraph}
    ${action}
  </div>
</div>
`);

export const textAsideMultiAction = storyFrom(html`
<div class="content-card content-card--text-right">
  ${img}
  <div class="content-card__text content-card__text--with-padding">
    ${heading}
    ${paragraph}
    ${renderAction('Action 1')}
    ${renderAction('Action 2')}
    ${renderAction('Action 3')}
  </div>
</div>
`);

export const textAsideAlignCenter = storyFrom(html`
<div class="content-card content-card--text-right">
  ${img}
  <div class="content-card__text content-card__text--with-padding content-card__text--center">
    ${heading}
    ${paragraph}
    ${action}
  </div>
</div>
`);

export const textAsideAlignRight = storyFrom(html`
<div class="content-card content-card--text-right">
  ${img}
  <div class="content-card__text content-card__text--with-padding content-card__text--right">
    ${heading}
    ${paragraph}
    ${action}
  </div>
</div>
`);

export const textOverAlignLeft = storyFrom(html`
<div class="content-card content-card--text-over">
  ${img}
  <div class="content-card__text content-card__text--with-padding">
    ${heading}
    ${paragraph}
    ${action}
  </div>
</div>
`);
export const textOverAlignCenter = storyFrom(html`
<div class="content-card content-card--text-over">
  ${img}
  <div class="content-card__text content-card__text--with-padding content-card__text--center">
    ${heading}
    ${paragraph}
    ${action}
  </div>
</div>
`);

export const textOverAlignRight = storyFrom(html`
<div class="content-card content-card--text-over">
  ${img}
  <div class="content-card__text content-card__text--with-padding content-card__text--right">
    ${heading}
    ${paragraph}
    ${action}
  </div>
</div>
`);
