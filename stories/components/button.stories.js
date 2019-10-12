import { html, storyFrom } from '../utils/story-from';
import '../styles/index.scss';

export default {
  title: 'Components/Button',
  includeStories: ['primaryButton', 'primaryLinkButton', 'secondaryButton', 'secondaryLinkButton'],
};

export const PrimaryButton = () => html`
  <button class="c-btn">Shop now</button>
`;

export const PrimaryLinkButton = () => html`
  <a href="#" class="c-btn">Shop now</a>
`;

export const SecondaryButton = () => html`
  <button class="c-btn secondary">Learn more</button>
`;

export const SecondaryLinkButton = () => html`
  <a href="#" class="c-btn secondary">Learn more</a>
`;

export const primaryButton = storyFrom(PrimaryButton());
export const primaryLinkButton = storyFrom(PrimaryLinkButton());
export const secondaryButton = storyFrom(SecondaryButton());
export const secondaryLinkButton = storyFrom(SecondaryLinkButton());
