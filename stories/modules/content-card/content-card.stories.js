import { html, storyFrom } from '../../utils/story-from';
import "./content-card.css";

export default {
  title: 'Modules/Content card',
};

const img = html`<img class="content-card__img" src="https://via.placeholder.com/800X600">`;

export const basic = storyFrom(html`
<div class="content-card">
  ${img}
  <div class="content-card__text">
    <h2 class="content-card__heading">Card heading</h2>
    <p class="content-card__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a class="content-card__action" href="#">Call to action</a>
  </div>
</div>`);

export const textAside = storyFrom(html`
<div class="content-card content-card--text-right">
  ${img}
  <div class="content-card__text content-card__text--with-padding">
    <h2>Card heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#">Call to action 1</a>
    <a href="#">Call to action 2</a>
    <a href="#">Call to action 3</a>
  </div>
</div>
`);

export const textAsideAlignCenter = storyFrom(html`
<div class="content-card content-card--text-right">
  ${img}
  <div class="content-card__text content-card__text--with-padding content-card__text--center">
    <h2>Card heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#">Call to action</a>
  </div>
</div>
`);

export const textAsideAlignRight = storyFrom(html`
<div class="content-card content-card--text-right">
  ${img}
  <div class="content-card__text content-card__text--with-padding content-card__text--right">
    <h2>Card heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#">Call to action</a>
  </div>
</div>
`);

export const textOverAlignLeft = storyFrom(html`
<div class="content-card content-card--text-over">
  ${img}
  <div class="content-card__text content-card__text--with-padding">
    <h2>Card heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#">Call to action</a>
  </div>
</div>
`);
export const textOverAlignCenter = storyFrom(html`
<div class="content-card content-card--text-over">
  ${img}
  <div class="content-card__text content-card__text--with-padding content-card__text--center">
    <h2>Card heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#">Call to action</a>
  </div>
</div>
`);

export const textOverAlignRight = storyFrom(html`
<div class="content-card content-card--text-over">
  ${img}
  <div class="content-card__text content-card__text--with-padding content-card__text--right">
    <h2>Card heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#">Call to action</a>
  </div>
</div>
`);
