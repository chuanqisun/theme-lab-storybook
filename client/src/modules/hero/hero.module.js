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
      <img className="m-hero__image" src={image.src} srcSet={image.srcSet} />
    </picture>
    <div className={`m-hero__text-container ${textAlignment}`}>
      {heading && <h2 className="m-hero__heading">{heading}</h2>}
      {body && <p className="m-hero__body">{body}</p>}
      {links && links.length > 0 && (
        <div className="m-hero__links-container">
          {links.map(link => (
            <a className="c-btn c-btn--primary c-btn--wide" key={link} href="javascript:void(0)">
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);
