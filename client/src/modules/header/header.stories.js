import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { headerData, headerDataSignedIn, knobify } from "./header.data";
import { Header } from "./header.module";
import { BasicMenu } from "./components/basic-menu.component";
import { Categories } from "./components/categories.component";
import { FullScreenMenu } from "./components/full-screen-menu.component";
import { FullScreenMenuLevel2 } from "./components/full-screen-menu-level-2.component";
import notes from "./header.notes.md";

export default {
  title: "Modules/Header",
  decorators: [withKnobs],
  parameters: { notes }
};

export const basic = () => <Header {...knobify(headerData)} />;
export const signedIn = () => <Header {...knobify(headerDataSignedIn)} />;
export const desktopBasicMenu = () => <BasicMenu />;
export const desktopCategories = () => <Categories />;
export const mobileFullScreenMenu = () => <FullScreenMenu />;
export const mobileFullScreenMenuSignedIn = () => (
  <FullScreenMenu isSignedIn={true} />
);

export const mobileFullScreenMenuLevel2 = () => <FullScreenMenuLevel2 />;
