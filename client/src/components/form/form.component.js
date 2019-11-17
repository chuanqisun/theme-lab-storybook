import React from "react";

export const Form = props => (
  <form className="c-form">
    <h1 className="c-form__title">Form title</h1>
    <div className="c-field c-form__item">
      <label className="c-field__prompt c-label" htmlFor="first-name">
        <span className="c-label__title">First name</span>
      </label>
      <input
        id="first-name"
        name="firstName"
        className="c-input c-input--text"
        type="text"
      />
    </div>
    <div className="c-field c-form__item">
      <label className="c-field__prompt c-label" htmlFor="last-name">
        <span className="c-label__title">Last name</span>
      </label>
      <input
        id="last-name"
        name="lastName"
        className="c-input c-input--text"
        type="text"
      />
    </div>
    <div className="c-field c-form__item">
      <label className="c-field__prompt c-label" htmlFor="addr-1">
        <span className="c-label__title">Address line 1</span>
      </label>
      <input
        id="addr-1"
        name="addressLine1"
        className="c-input c-input--text"
        type="text"
      />
    </div>
    <div className="c-field c-form__item">
      <label className="c-field__prompt c-label" htmlFor="addr-2">
        <span className="c-label__title">Address line 2</span>
      </label>
      <input
        id="addr-2"
        name="addressLine2"
        className="c-input c-input--text"
        type="text"
      />
    </div>
    <div className="c-field c-form__item">
      <label className="c-field__prompt c-label" htmlFor="city">
        <span className="c-label__title">City</span>
      </label>
      <select id="city" className="c-input c-input--select" defaultValue="">
        <option value="" disabled>
          Choose a city
        </option>
        <option value="City 1">Seattle</option>
        <option value="City 2">Spokane</option>
        <option value="City 3">Tacoma</option>
        <option value="City 4">Yakima</option>
      </select>
    </div>
    <div className="c-field c-form__item">
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
    <div className="c-field c-form__item">
      <label className="c-field__prompt c-label" htmlFor="zip">
        <span className="c-label__title">Zip code</span>
      </label>
      <input
        id="zip"
        name="zipCode"
        className="c-input c-input--text"
        type="text"
      />
    </div>
    <div className="c-field c-form__item">
      <div className="c-input-item">
        <input
          className="c-checkbox c-input-item__control"
          id="save-addr-for-next"
          type="checkbox"
          name="saveAddrForNext"
          defaultChecked={false}
        />
        <label
          className="c-input-item__label c-label"
          htmlFor="save-addr-for-next"
        >
          <span className="c-label__body">Save this address for next time</span>
        </label>
      </div>
      <div className="c-input-item">
        <input
          className="c-checkbox c-input-item__control"
          id="use-shipping-addr"
          type="checkbox"
          name="useShippingAddr"
          defaultChecked={true}
        />
        <label
          className="c-input-item__label c-label"
          htmlFor="use-shipping-addr"
        >
          <span className="c-label__body">Use my shipping address</span>
        </label>
      </div>
    </div>
    <div className="c-field c-form__item">
      <div className="c-field__prompt c-label" htmlFor="state">
        <span className="c-label__title">Shipping method</span>
      </div>
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
    </div>
  </form>
);
