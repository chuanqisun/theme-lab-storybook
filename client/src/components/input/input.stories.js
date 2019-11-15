import React from "react";
import notes from "./input.notes.md";

export default { title: "Components/Input", parameters: { notes } };

export const textInput = () => <input className="c-input" type="text" />;
export const textInputWithLabel = () => (
  <div>
    <label htmlFor="addr-1">Address line 1</label>
    <input id="addr-1" name="addr-1" className="c-input" type="text" />
  </div>
);
