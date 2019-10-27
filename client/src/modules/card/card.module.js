import React from 'react';
import { cardData } from './card.data';

export const Card = ({ image = cardData.image, body = cardData.body, heading = cardData.heading, links = cardData.links, ...props }) => (
  <div className="m-card">
    <img class="m-card__img" src={image.src} />
    <div class="m-card__text-container">
      {heading && <h2 class="m-card__heading">{heading}</h2>}
      {body && <p class="m-card__body">{body}</p>}
      {links && links.length > 0 && (
        <div className="m-card__links-container">
          {links.map(link => (
            <>
              <a key={link} href="javascript:void(0)">
                {link}
              </a>
              &nbsp;&nbsp;
            </>
          ))}
        </div>
      )}
    </div>
  </div>
);
