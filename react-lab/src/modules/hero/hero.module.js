import React from 'react';
import { heroData } from './hero.data';

export const Hero = ({
  title = heroData.title,
  body = heroData.body,
  links = heroData.links,
  image = heroData.image,
  textAlignment = heroData.textAlignment,
  ...props
}) => (
  <div className="m-hero">
    <picture>
      {image.sources.map(source => (
        <source media={source.media} srcSet={source.srcSet} />
      ))}
      <img className="img" src={image.src} srcSet={image.srcSet} />
    </picture>
    <div className={`text-container ${textAlignment}`}>
      <h2 className="heading">{title}</h2>
      <p className="paragraph">{body}</p>
      <div className="links-container">
        {links.map(link => (
          <a className="c-btn" key={link.label} href="javascript:void(0)">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);
