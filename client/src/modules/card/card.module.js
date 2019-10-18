import React from 'react';
import { cardData } from './card.data';

export const Card = ({ image = cardData.image, body = cardData.body, heading = cardData.heading, ...props }) => (
  <div className="m-card">
    <img class="m-card__img" src={image.src} />
    <div class="m-card__text-container">
      {heading && <h2 class="m-card__heading">{heading}</h2>}
      {body && <p class="m-card__body">{body}</p>}
    </div>
  </div>
);
