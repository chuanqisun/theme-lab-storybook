import '../../styles/index.scss';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { message } from './magic-bar.data';

export default {
  title: 'Modules/Magic bar',
  includeStories: ['basic'],
  decorators: [withKnobs],
};

export const basic = () => {
  return /* html */ `
  <h1>EPIC!</h1>
  <div><span>${message()}</span></div>
`;
};
