import { select } from '@storybook/addon-knobs';

export const columnsData = {
  layout: '1:1',
};

export const columnsData1To1To1 = {
  layout: '1:1:1',
};

export const columnsData1To2 = {
  layout: '1:2',
};

export const columnsData2To1 = {
  layout: '2:1',
};

export const knobify = (data = columnsData) => ({
  ...data,
  layout: select('Layout', ['1:1', '1:1:1', '1:2', '2:1'], data.layout),
});
