import { html, storyFrom } from '../utils/story-from';
import { messageBarDefaultData, messageBarMultiMessageData } from './message-bar.data';
import '../styles/index.scss';

export default {
  title: 'Modules/Message bar',
  includeStories: ['singleMessage', 'multiMessage'],
};

export const MessageBar = (data = messageBarDefaultData) => html`
  <div class="m-message-bar">
    <span class="message">${data.message}</span>
  </div>
`;

export const MessageBarMultiMessage = (data = messageBarMultiMessageData) => html`
  <div class="m-message-bar multiple">
    ${data.messages.map(
      message =>
        html`
          <span class="message">${message}</span>
        `
    )}
  </div>
`;

export const singleMessage = storyFrom(MessageBar());
export const multiMessage = storyFrom(html`
  <div class="demo-notes">
    1. The html in this demo is not accessible. Please consult SME for implementation. <br />
    2. For demo purposes, the slide duration is 3 seconds. In production, use 5 seconds at least to provide more reading time.<br />
    3. Animation should be paused once user hovers on the message bar. This behavior is not demoed here.
  </div>
  ${MessageBarMultiMessage()}
`);
