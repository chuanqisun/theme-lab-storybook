import React from "react";
import notes from "./input.notes.md";

export default { title: "Components/Input", parameters: { notes } };

export const textInput = () => <input className="c-input" type="text" />;

export const textInputWithLabel = () => (
  <div className="c-field">
    <label className="c-label" htmlFor="addr-1">
      <span className="c-label__content">Address line 1</span>
    </label>
    <input id="addr-1" name="addr-1" className="c-input" type="text" />
  </div>
);

export const textInputWithError = () => (
  <div className="c-field">
    <label className="c-label" htmlFor="addr-1">
      <span className="c-label__content">Address line 1</span>
      <span className="c-label__error">Please provide a valid addres</span>
    </label>
    <input
      id="addr-1"
      name="addr-1"
      className="c-input"
      type="text"
      invalid=""
    />
  </div>
);
