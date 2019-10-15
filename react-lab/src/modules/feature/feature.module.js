import React from 'react';
import { featureData } from './feature.data';

export const Feature = ({
  heading = featureData.heading,
  body = featureData.body,
  links = featureData.links,
  image = featureData.image,
  layout = featureData.layout,
  fullBleed = featureData.fullBleed,
  ...props
}) => (
  <div className={`m-feature ${layout}${fullBleed ? ' full-bleed' : ''}`}>
    <picture>
      {image.sources.map((source, i) => (
        <source key={i} media={source.media} srcSet={source.srcSet} />
      ))}
      <img className="img" src={image.src} srcSet={image.srcSet} />
    </picture>
    <div className="text-container">
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
