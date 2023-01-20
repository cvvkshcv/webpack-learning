import _ from 'lodash';
import style from './index.css';

console.log({style});

const add = require('./functions/add');
const sub = require('./functions/sub');

console.log(add(1, 2));

document.getElementById('btn').addEventListener('click', () => {
  const h1 = document.getElementById('h1')
  h1.innerText = _.random(1000);
  h1.className = style.button;
});