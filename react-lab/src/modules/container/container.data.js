import { text, boolean } from '@storybook/addon-knobs';

export const containerData = {
  fullBleed: false,
};

export const knobify = (data = containerData) => ({
  ...data,
  fullBleed: boolean('Full bleed', data.fullBleed),
});
