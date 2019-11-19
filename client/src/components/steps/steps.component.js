import React from "react";
import { Form } from "../form";

export const Steps = props => (
  <div className="c-steps">
    <section className="c-steps__step">
      <h2 className="c-steps__step-heading">
        <span className="c-steps__heading-text">Step name</span>
      </h2>
      <div className="c-steps__inline-actions">
        <button className="c-steps__inline-action c-btn c-btn--link">
          Edit
        </button>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </section>

    <section className="c-steps__step">
      <h2 className="c-steps__step-heading">
        <span className="c-steps__heading-text">Step name</span>
      </h2>
      <div className="c-steps__inline-actions">
        <button className="c-steps__inline-action c-btn c-btn--link">
          Edit
        </button>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </section>

    <section className="c-steps__step">
      <h2 className="c-steps__step-heading">
        <span className="c-steps__heading-text">Step name</span>
      </h2>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="c-steps__step-actions">
        <button className="c-steps__step-action c-btn">Continue</button>
      </div>
    </section>

    <section className="c-steps__step c-steps__step--disabled ">
      <h2 className="c-steps__step-heading">
        <span className="c-steps__heading-text">Step name</span>
      </h2>
    </section>

    <section className="c-steps__step c-steps__step--disabled ">
      <h2 className="c-steps__step-heading">
        <span className="c-steps__heading-text">Step name</span>
      </h2>
    </section>
  </div>
);

export const StepsWithForm = () => (
  <div className="c-steps">
    <section className="c-steps__step">
      <h2 className="c-steps__step-heading">
        <span className="c-steps__heading-text">Step name</span>
      </h2>
      <div className="c-steps__inline-actions">
        <button className="c-steps__inline-action c-btn c-btn--link">
          Edit
        </button>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </section>

    <section className="c-steps__step">
      <h2 className="c-steps__step-heading">
        <span className="c-steps__heading-text">Step name</span>
      </h2>

      <Form />

      <div className="c-steps__step-actions">
        <button className="c-steps__step-action c-btn">Continue</button>
      </div>
    </section>

    <section className="c-steps__step c-steps__step--disabled ">
      <h2 className="c-steps__step-heading">
        <span className="c-steps__heading-text">Step name</span>
      </h2>
    </section>
  </div>
);
