import { html, storyFrom } from '../../utils/story-from';
import { messageBarDefaultData, messageBarMultiMessageData } from './message-bar.data';
import '../../styles/index.scss';
import notes from './message-bar.md';

export default {
  title: 'Modules/Message bar',
  includeStories: ['singleMessage', 'multiMessage', 'testMessage'],
  parameters: { notes },
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
export const multiMessage = storyFrom(MessageBarMultiMessage());
