import React from 'react';
import { headerData } from './header.data';
import { Icon } from '../../components/icon';

export const Header = ({ logo = headerData.logo, account = headerData.account, cart = headerData.cart, nav = headerData.nav, ...props }) => (
  <header className="m-header">
    <img className="m-header__logo" src={logo.src} />
    <button className="c-btn m-header__search">
      <Icon name="search" />
      Search
    </button>
    {account.signedIn ? (
      <a className="c-btn m-header__account" href="javascript:void(0)">
        My account
      </a>
    ) : (
      <a className="c-btn m-header__account" href="javascript:void(0)">
        Sign in
      </a>
    )}
    <a className="c-btn c-btn--square m-header__wishlist" href="javascript:void(0)">
      <Icon name="wishlist" label="wishlist" />
    </a>
    <a className="c-btn m-header__cart" href="javascript:void(0)">
      <Icon name="cart" label="cart" />({cart.itemCount})
    </a>
    <nav className="m-header__nav">
      <ul className="m-header__nav-ul">
        {nav.categories.map(category => (
          <li className="m-header__nav-li" key={category}>
            <a href="javascript:void(0)">{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
