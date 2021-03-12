/* eslint-disable no-console */
import exphbs from 'express-handlebars';
import { JSDOM } from 'jsdom';
import helpers from '../helpers';

const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: helpers,

  // update this based on `src/app.js`
  partialsDir: [
    'views/partials/icons/',
    'shared/templates/',
    'views/partials/',
    'views/partials/gtm/',
    'views/partials/prices/',
    'views/partials/sidebars/',
    'views/partials/svgs/',
  ]
});
let debugComponent = { name: '', source: '' };

/**
 * Debug the component (print on console)
 */
export const debug = () => {
  const cyanColor = '\x1b[36m%s\x1b[0m';
  console.log(cyanColor, `\n\n[test_setup] Rendered Component [${debugComponent.name}]:`);
  console.log(cyanColor, `\n${debugComponent.source}\n\n`);
};

/**
 * Render a component
 * @param {string} filename - The component path
 * @param {object} data - The component data
 */
const render = async (filename, data = {}) => {
  const html = await hbs.render(filename, data);

  // to debug purpouses
  debugComponent = {
    name: filename,
    source: html
  };

  const { document } = new JSDOM(html).window;
  global.document = document;
  global.$ = document.querySelector.bind(document);
  global.$$ = document.querySelectorAll.bind(document);
};

export default render;
