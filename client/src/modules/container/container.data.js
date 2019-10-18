import { boolean } from '@storybook/addon-knobs';

export const containerData = {
  fullBleed: true,
};

export const containerDataClamped = {
  fullBleed: false,
};

export const knobify = (data = containerData) => ({
  ...data,
  fullBleed: boolean('Full bleed', data.fullBleed),
});
