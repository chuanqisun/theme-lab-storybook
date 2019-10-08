import {render} from 'lit-html';

export const storyFrom = templateResult => {
  let element = document.createElement('div');
  render(templateResult, element );
  return () => element;
}

export {html} from 'lit-html';