import { select } from '@storybook/addon-knobs';

export const containerData = {
  layout: 'full-bleed',
};

export const containerDataClampedWithPadding = {
  layout: 'clamped-with-padding',
};

export const containerDataFullWithPadding = {
  layout: 'full-with-padding',
}

export const knobify = (data = containerData) => ({
  ...data,
  layout: select('Layout', ['full-bleed', 'full-with-padding', 'clamped-with-padding'], data.layout),
});
