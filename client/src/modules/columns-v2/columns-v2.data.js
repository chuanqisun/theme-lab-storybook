import { text, select } from '@storybook/addon-knobs';


export const columnsData = {
  columns: '1:1',
  layout: 'full-bleed'
};

export const columnsData1To2 = {
  ...columnsData,
  columns: '1:2',
};

export const columnsData2To1 = {
  ...columnsData,
  columns: '2:1',
};

export const columnsData1To1To1 = {
  ...columnsData,
  columns: '1:1:1',
};

export const columnsDataFullWithPadding = {
  ...columnsData,
  layout: 'full-with-padding',
};

export const columnsDataClampedWithPadding = {
  ...columnsData,
  layout: 'clamped-with-padding',
};

export const knobify = (data = columnsData) => ({
  ...data,
  columns: select('Columns', ['1:1', '1:1:1', '1:2', '2:1'], data.columns),
  layout: select('Layout', ['full-bleed', 'full-with-padding', 'clamped-with-padding'], data.layout),
});
