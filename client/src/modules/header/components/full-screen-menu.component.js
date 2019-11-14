import React from "react";
import { Icon } from "../../../components/icon";

export const FullScreenMenu = ({ isSignedIn = false }) => (
  <div className="mc-full-screen-menu">
    <div className="mc-full-screen-menu__content">
      <button className="mc-full-screen-menu__close c-btn c-btn--square c-btn--ghost">
        <Icon name="close" label="close" />
      </button>
      <ul className="mc-full-screen-menu__items">
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Men</span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Women</span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Kids</span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Home</span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <button className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Beauty</span>
            <Icon name="navigate-to" />
          </button>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <a className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Gifts</span>
          </a>
        </li>
        <li className="mc-full-screen-menu__category-item">
          <a className="mc-full-screen-menu__link" href="#">
            <span className="mc-full-screen-menu__category-name">Sale</span>
          </a>
        </li>
        <hr className="mc-full-screen-menu__divider" />
        {isSignedIn ? (
          <>
            <li>
              <a className="mc-full-screen-menu__link" href="#">
                <Icon name="account" />
                <span className="mc-full-screen-menu__action-name">
                  My account
                </span>
              </a>
            </li>
            <li>
              <a className="mc-full-screen-menu__link" href="#">
                <Icon name="wishlist" />
                <span className="mc-full-screen-menu__action-name">
                  Wishlist
                </span>
              </a>
            </li>
          </>
        ) : (
          <li>
            <a className="mc-full-screen-menu__link" href="#">
              <Icon name="account" />
              <span className="mc-full-screen-menu__action-name">Sign in</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  </div>
);
