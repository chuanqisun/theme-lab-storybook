import React from "react";
import { Icon } from "../../../components/icon";

export const FullScreenMenu = props => (
  <div className="mc-full-screen-menu">
    <div className="mc-full-screen-menu__content">
      <button className="c-btn c-ctn--square">
        <Icon name="search" />
      </button>
      <ul>
        <li>
          <a href="javascript:void(0)">Men</a>
        </li>
        <li>
          <a href="javascript:void(0)">Women</a>
        </li>
        <li>
          <a href="javascript:void(0)">Kids</a>
        </li>
        <li>
          <a href="javascript:void(0)">Home</a>
        </li>
        <li>
          <a href="javascript:void(0)">Beauty</a>
        </li>
        <li>
          <a href="javascript:void(0)">Gifts</a>
        </li>
        <li>
          <a href="javascript:void(0)">Sale</a>
        </li>
        <hr />
        <li>
          <a href="javascript:void(0)">Sign in</a>
        </li>
        <li>
          <a href="javascript:void(0)">My account</a>
        </li>
        <li>
          <a href="javascript:void(0)">Wishlists</a>
        </li>
      </ul>
    </div>
  </div>
);
