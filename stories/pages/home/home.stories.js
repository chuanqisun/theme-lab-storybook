import { html, storyFrom } from '../../utils/story-from';
import { ContentCardHeroLayout } from '../../modules/content-card/content-card.stories';
import './temp.css';

export default {
  title: 'Pages/Home',
};

export const basic = storyFrom(html`
  <div class="m-info-bar">Info bar message</div>
  <div class="m-header">
    <img class="m-header__logo" src="https://via.placeholder.com/160X48" />
    <button>Search</button><a href="#">Account</a><a href="#">Wishlist</a>&nbsp;|&nbsp;<a href="#">Cart (0)</a>
    <nav class="m-header__nav">Category 1 2 3</nav>
  </div>
  ${ContentCardHeroLayout()}
  <div class="m-spacer"></div>
  ${ContentCardHeroLayout()}
  <div class="m-rich-text"></div>
  <div class="m-columns">
    <div class="m-content-card"></div>
    <div class="m-content-card"></div>
    <div class="m-content-card"></div>
  </div>
  <div class="m-video"></div>
  <div class="m-product-list"></div>
  <div class="m-product-list"></div>
  <div class="m-footer"></div>
`);
