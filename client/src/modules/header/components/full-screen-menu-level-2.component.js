import React from "react";
import { Icon } from "../../../components/icon";

export const FullScreenMenuLevel2 = ({ isSignedIn = false }) => (
  <div className="mc-full-screen-menu">
    <div className="mc-full-screen-menu__content">
      <button className="mc-full-screen-menu__link mc-full-screen-menu__link--as-heading">
        <Icon name="navigate-back" />
        <span className="full-screen-menu__category-name full-screen-menu__category-name--as-heading">
          Women
        </span>
      </button>
      <hr className="mc-full-screen-menu__divider" />
      <ul className="mc-full-screen-menu__items">
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Clothing</span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Shoes</span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Jewelry</span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">
              Accessories
            </span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Sales</span>
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">
              All Women
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
);
