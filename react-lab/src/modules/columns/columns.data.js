import { select, boolean } from '@storybook/addon-knobs';

export const columnsData = {
  layout: '1:1',
  fullBleed: true,
};

export const columnsData1To2 = {
  ...columnsData,
  layout: '1:2',
};

export const columnsData2To1 = {
  ...columnsData,
  layout: '2:1',
};

export const columnsData1To1To1 = {
  ...columnsData,
  layout: '1:1:1',
};

export const columnsDataClamped = {
  ...columnsData,
  fullBleed: false,
};

export const knobify = (data = columnsData) => ({
  ...data,
  layout: select('Layout', ['1:1', '1:1:1', '1:2', '2:1'], data.layout),
  fullBleed: boolean('Full bleed', data.fullBleed),
});
