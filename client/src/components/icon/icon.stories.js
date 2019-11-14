import React from "react";
import { Icon } from "./icon.component";
import notes from "./icon.notes.md";

export default { title: "Components/Icon", parameters: { notes } };

export const fullIst = () => (
  <>
    <Icon title="account" name="account" />
    &nbsp;
    <Icon title="cart" name="cart" />
    &nbsp;
    <Icon title="close" name="close" />
    &nbsp;
    <Icon title="go-shop" name="go-shop" />
    &nbsp;
    <Icon title="mobile-nav" name="mobile-nav" />
    &nbsp;
    <Icon title="navigate-to" name="navigate-to" />
    &nbsp;
    <Icon title="search" name="search" />
    &nbsp;
    <Icon title="wishlist" name="wishlist" />
    &nbsp;
  </>
);
