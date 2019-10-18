import React from 'react';

export const Footer = ({ ...props }) => (
  <footer className="m-footer">
    <div className="m-footer__newsletter">
      <h2 className="m-footer__heading-l">Sign up for Fabrikam’s newsletter</h2>
      <p>Hear about the latest deals from us</p>
      <label>Email address</label>
      <input type="email" />
      <h3 className="m-footer__heading-m">Find us</h3>
      <span>[i]</span>
      <span>[f]</span>
      <span>[t]</span>
    </div>
    <div>
      <h2 className="m-footer__heading-m">Customer service</h2>
      <ul>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="m-footer__heading-m">Fabrikam store</h2>
      <ul>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="m-footer__heading-m">About us</h2>
      <ul>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
        <li>
          <a href="javascript:void(0)">Link</a>
        </li>
      </ul>
    </div>
  </footer>
);
