import React from 'react';
import { cardData } from './card.data';

export const Card = ({ image = cardData.image, body = cardData.body, heading = cardData.heading, ...props }) => (
  <div className="m-card">
    <img class="img" src={image.src} />
    <div class="text-container">
      <h2 class="heading">{heading}</h2>
      <p class="body">{body}</p>
    </div>
  </div>
);
