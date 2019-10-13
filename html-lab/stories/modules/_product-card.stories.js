import { html, storyFrom } from '../utils/story-from';
import '../styles/index.scss';

export default {
  title: 'Modules/(wip) Product card',
};

const img = html`
  <img class="m-product-card__img" src="https://via.placeholder.com/200X350" />
`;
const heading = html`
  <h2 class="m-product-card__heading">Card heading</h2>
`;
const paragraph = html`
  <p class="m-product-card__paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
`;
const rating = html`
  <div>****-</div>
`;
const price = html`
  <div>$99.99</div>
`;

export const basic = storyFrom(html`
  <a href="#" class="m-product-card">
    ${img}
    <div class="m-product-card__text">
      ${heading} ${price}
    </div>
  </a>
`);

export const withDetails = storyFrom(html`
  <a href="#" class="m-product-card">
    ${img}
    <div class="m-product-card__text">
      ${heading} ${paragraph} ${price}
    </div>
  </a>
`);

export const withRating = storyFrom(html`
  <a href="#" class="m-product-card">
    ${img}
    <div class="m-product-card__text">
      ${heading} ${rating} ${price}
    </div>
  </a>
`);
