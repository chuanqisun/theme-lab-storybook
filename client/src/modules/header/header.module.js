import React from "react";
import { headerData } from "./header.data";
import { Icon } from "../../components/icon";
import { Categories } from "./components/categories.component";

export const Header = ({
  logo = headerData.logo,
  account = headerData.account,
  cart = headerData.cart,
  ...props
}) => (
  <header className="m-header">
    <button className="c-btn c-btn--ghost c-btn--square m-header__hamburger">
      <Icon name="mobile-nav" label="menu" />
    </button>
    <picture className="m-header__logo-container">
      {logo.sources.map((source, i) => (
        <source key={i} media={source.media} srcSet={source.srcSet} />
      ))}
      <img className="m-header__logo" src={logo.src} />
    </picture>
    <button className="c-btn c-btn--ghost c-btn--icon-before m-header__search">
      <Icon name="search" />
      <span className="m-header__search-label">Search</span>
    </button>
    {account.signedIn ? (
      <a
        className="c-btn c-btn--ghost m-header__account"
        href="javascript:void(0)"
      >
        Adriana
      </a>
    ) : (
      <a
        className="c-btn c-btn--ghost m-header__account"
        href="javascript:void(0)"
      >
        Sign in
      </a>
    )}
    <a
      className="c-btn c-btn--ghost c-btn--square m-header__wishlist"
      href="javascript:void(0)"
    >
      <Icon name="wishlist" label="wishlist" />
    </a>
    <div className="m-header__divider" />
    <a
      className="c-btn c-btn--ghost m-header__cart c-btn--icon-before"
      href="javascript:void(0)"
    >
      <Icon name="cart" label="cart" />({cart.itemCount})
    </a>
    <Categories />
  </header>
);
