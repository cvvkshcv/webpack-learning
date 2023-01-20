import _ from 'lodash';

document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('h1').innerText = _.random(1000);
});