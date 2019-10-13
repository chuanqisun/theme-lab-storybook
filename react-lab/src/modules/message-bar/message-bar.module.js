import React from 'react';
import { messageBarData } from './message-bar.data';

export const MessageBar = ({ ...props }) => (
  <div class="m-message-bar">
    <span class="message">Message 1</span>
    <span class="message">Message 2</span>
    <span class="message">Message 3</span>
  </div>
);
