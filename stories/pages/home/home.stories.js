import { html, storyFrom } from '../../utils/story-from';
import { ContentCardHeroLayout, ContentCardCardLayout } from '../../modules/content-card/content-card.stories';
import './temp.css';

export default {
  title: 'Pages/Home',
};

export const basic = storyFrom(html`
  <div class="m-info-bar">Info bar message</div>
  <header class="m-header">
    <img class="m-header__logo" src="https://via.placeholder.com/160X48" />
    <button>Search</button><a href="#">Account</a><a href="#">Wishlist</a>&nbsp;|&nbsp;<a href="#">Cart (0)</a>
    <nav class="m-header__nav">Category 1 2 3</nav>
  </header>
  ${ContentCardHeroLayout()}
  <div class="m-spacer m-spacer--2x"></div>
  <div class="m-container m-container--clamp m-container--side-padding">
    ${ContentCardHeroLayout()}
    <div class="m-spacer m-spacer--2x"></div>
    <div class="m-container--columns">
      ${ContentCardCardLayout()} ${ContentCardCardLayout()}
    </div>
    <div class="m-spacer m-spacer--2x"></div>
    <div class="m-text">Dress up for the new season</div>
    <div class="m-spacer"></div>
    <div class="m-container--columns">
      ${ContentCardCardLayout()} ${ContentCardCardLayout()} ${ContentCardCardLayout()}
    </div>
    <div class="m-product-list"></div>
    <div class="m-product-list"></div>
  </div>
  <div class="m-spacer m-spacer--2x"></div>
  <footer class="m-footer">
    <div class="m-footer__columns m-container m-container--side-padding">
      <div class="m-email-subscribe">
        <h2>Get 50% off on your first order</h2>
        <label>Email</label>
        <input type="email" />
      </div>
      <nav class="m-sitemap">
        <div class="m-container--columns">
          <div>
            <h2>Section</h2>
            <ul>
              <li><a href="#">area</a></li>
              <li><a href="#">area</a></li>
              <li><a href="#">area</a></li>
            </ul>
          </div>
          <div>
            <h2>Section</h2>
            <ul>
              <li><a href="#">area</a></li>
              <li><a href="#">area</a></li>
              <li><a href="#">area</a></li>
            </ul>
          </div>
          <div>
            <h2>Section</h2>
            <ul>
              <li><a href="#">area</a></li>
              <li><a href="#">area</a></li>
              <li><a href="#">area</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </footer>
`);
