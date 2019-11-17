import React from "react";
import notes from "./input.notes.md";

export default { title: "Components/Input", parameters: { notes } };

export const textInput = () => (
  <input className="c-input c-input--text" type="text" />
);

export const textInputWithLabel = () => (
  <div className="c-field">
    <label className="c-field__prompt c-label" htmlFor="addr-1">
      <span className="c-label__title">Address line 1</span>
    </label>
    <input
      id="addr-1"
      name="addr-1"
      className="c-input c-input--text"
      type="text"
    />
  </div>
);

export const textInputWithError = () => (
  <div className="c-field">
    <label className="c-field__prompt c-label" htmlFor="addr-1">
      <span className="c-label__title">Address line 1</span>
      <span className="c-label__error">Please provide a valid addres</span>
    </label>
    <input
      id="addr-1"
      name="addr-1"
      className="c-input c-input--text"
      type="text"
      invalid=""
    />
  </div>
);

export const dropdownSelect = () => (
  <div className="c-field">
    <label className="c-field__prompt c-label" htmlFor="state">
      <span className="c-label__title">State</span>
    </label>
    <select id="state" className="c-input c-input--select" defaultValue="">
      <option value="" disabled>
        Choose a state
      </option>
      <option value="AK">AK</option>
      <option value="CA">CA</option>
      <option value="IL">IL</option>
      <option value="WA">WA</option>
    </select>
  </div>
);

export const checkbox = () => (
  <div className="c-input-item">
    <input
      className="c-checkbox c-input-item__control"
      id="use-shipping-addr"
      type="checkbox"
      name="useShippingAddr"
      defaultChecked={true}
    />
    <label className="c-input-item__label c-label" htmlFor="use-shipping-addr">
      <span className="c-label__body">Use my shipping address</span>
    </label>
  </div>
);

export const radio = () => (
  <>
    <div className="c-input-item">
      <input
        className="c-radio c-input-item__control"
        defaultChecked={true}
        type="radio"
        name="shipping-method"
        id="shipping-method-1"
      />
      <label
        className="c-input-item__label c-label"
        htmlFor="shipping-method-1"
      >
        <span className="c-label__body">
          Standard shipping - Delivers in 2-5 business days
        </span>
      </label>
    </div>
    <div className="c-input-item">
      <input
        className="c-radio c-input-item__control"
        type="radio"
        name="shipping-method"
        id="shipping-method-2"
      />
      <label
        className="c-input-item__label c-label"
        htmlFor="shipping-method-2"
      >
        <span className="c-label__body">
          Express shipping - Delivers within 3 business days
        </span>
      </label>
    </div>
    <div className="c-input-item">
      <input
        className="c-radio c-input-item__control"
        type="radio"
        name="shipping-method"
        id="shipping-method-3"
      />
      <label
        className="c-input-item__label c-label"
        htmlFor="shipping-method-3"
      >
        <span className="c-label__body">
          Priority shipping - Delivers in 1-2 business days
        </span>
      </label>
    </div>
  </>
);

export const radioRichText = () => (
  <>
    <div className="c-input-item">
      <input
        className="c-radio c-input-item__control"
        defaultChecked={true}
        type="radio"
        name="shipping-method"
        id="shipping-method-1"
      />
      <label
        className="c-input-item__label c-label c-label--stretch"
        htmlFor="shipping-method-1"
      >
        <span className="c-label__near c-label__body">
          Standard shipping - Delivers in 2-5 business days
        </span>
        <span className="c-label__title c-label__far">FREE SHIPPING</span>
      </label>
    </div>
    <div className="c-input-item">
      <input
        className="c-radio c-input-item__control"
        type="radio"
        name="shipping-method"
        id="shipping-method-2"
      />
      <label
        className="c-input-item__label c-label c-label--stretch"
        htmlFor="shipping-method-2"
      >
        <span className="c-label__near c-label__body">
          Express shipping - Delivers within 3 business days
        </span>
        <span className="c-label__title c-label__far">$15.00</span>
      </label>
    </div>
    <div className="c-input-item">
      <input
        className="c-radio c-input-item__control"
        type="radio"
        name="shipping-method"
        id="shipping-method-3"
      />
      <label
        className="c-input-item__label c-label c-label--stretch"
        htmlFor="shipping-method-3"
      >
        <span className="c-label__near c-label__body">
          Priority shipping - Delivers in 1-2 business days
        </span>
        <span className="c-label__title c-label__far">$25.00</span>
      </label>
    </div>
  </>
);
