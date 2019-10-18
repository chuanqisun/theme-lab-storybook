import React from 'react';
import { heroData } from './hero.data';

export const Hero = ({
  heading = heroData.heading,
  body = heroData.body,
  links = heroData.links,
  image = heroData.image,
  textAlignment = heroData.textAlignment,
  ...props
}) => (
  <div className="m-hero">
    <picture>
      {image.sources.map((source, i) => (
        <source key={i} media={source.media} srcSet={source.srcSet} />
      ))}
      <img className="img" src={image.src} srcSet={image.srcSet} />
    </picture>
    <div className={`text-container ${textAlignment}`}>
      {heading && <h2 className="heading">{heading}</h2>}
      {body && <p className="body">{body}</p>}
      {links && links.length > 0 && (
        <div className="links-container">
          {links.map(link => (
            <a className="c-btn" key={link} href="javascript:void(0)">
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);
