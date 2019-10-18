import React from 'react';
import { headerData } from './header.data';
import { Icon } from '../../components/icon';

export const Header = ({ logo = headerData.logo, account = headerData.account, cart = headerData.cart, nav = headerData.nav, ...props }) => (
  <header className="m-header">
    <img className="logo" src={logo.src} />
    <button className="search">
      <Icon name="search" />
      Search
    </button>
    {account.signedIn ? (
      <a className="account" href="javascript:void(0)">
        My account
      </a>
    ) : (
      <a className="account" href="javascript:void(0)">
        Sign in
      </a>
    )}
    <a className="wishlist" href="javascript:void(0)">
      <Icon name="wishlist" label="wishlist" />
    </a>
    <a className="cart" href="javascript:void(0)">
      <Icon name="cart" label="cart" />({cart.itemCount})
    </a>
    <nav className="nav">
      <ul className="nav-ul">
        {nav.categories.map(category => (
          <li className="nav-li" key={category}>
            <a href="javascript:void(0)">{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
