import React from 'react';
import { messageBarData } from './message-bar.data';
import { useSlides } from '../../utilities/use-slides';

export const MessageBar = ({ messages = messageBarData.messages, slideInterval = messageBarData.slideInterval, ...props }) => {
  const { currentIndex, prevIndex } = useSlides(messages.length, slideInterval);

  return (
    <div className="m-message-bar">
      {messages.length === 1 && <span className="message static">{messages[0]}</span>}
      {messages.length > 1 &&
        messages.map((message, i) => (
          <span key={i} className={`message${i === currentIndex ? ' entering' : ''}${i === prevIndex ? ' leaving' : ''}`}>
            {message}
          </span>
        ))}
    </div>
  );
};
