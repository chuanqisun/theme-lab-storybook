import { html, storyFrom } from '../../utils/story-from';
import { contentCard } from '../../modules/content-card/content-card.stories';

export default {
  title: 'Pages/Home',
};

export const basic = storyFrom(html`
  <div>Info bar</div>
  ${contentCard()}
`);
