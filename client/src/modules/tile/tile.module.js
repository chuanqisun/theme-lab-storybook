import React from 'react';
import { tileData } from './tile.data';

export const Tile = ({ image = tileData.image, body = tileData.body, heading = tileData.heading, links = tileData.links, ...props }) => (
  <div className="m-tile">
    <img class="m-tile__img" src={image.src} />
    <div class="m-tile__text-container">
      {heading && <h2 class="m-tile__heading">{heading}</h2>}
      {body && <p class="m-tile__body">{body}</p>}
      {links && links.length > 0 && (
        <div className="m-tile__links-container">
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
