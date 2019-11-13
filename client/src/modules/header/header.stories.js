import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { headerData, headerDataSignedIn, knobify } from "./header.data";
import { Header } from "./header.module";
import { BasicMenu } from "./components/basic-menu.component";
import notes from "./header.notes.md";

export default {
  title: "Modules/Header",
  decorators: [withKnobs],
  parameters: { notes }
};

export const basic = () => <Header {...knobify(headerData)} />;
export const signedIn = () => <Header {...knobify(headerDataSignedIn)} />;
export const desktopBasicMenu = () => <BasicMenu />;
