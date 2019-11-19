import React from "react";
import { Steps, StepsWithForm } from "./steps.component";
import notes from "./steps.notes.md";

export default { title: "Components/Steps", parameters: { notes } };

export const basic = () => <Steps />;
export const withForm = () => <StepsWithForm />;
