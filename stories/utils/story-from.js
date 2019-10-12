import { render } from 'lit-html';

export const storyFrom = templateResult => {
  let element = document.createElement('div');
  render(templateResult, element);
  return () => element;
};

export { html } from 'lit-html';

export const htmlToElement = (renderFn, data) => {
  const element = document.createElement('div');
  render(renderFn(data), element);
  return element;
};
