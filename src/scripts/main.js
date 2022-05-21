// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from '../api/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `<button id="joke-btn" type="button" class="joke-btn btn btn-primary" >Get a Joke</button><button id="punchLine" type="button" style='display: none' class="punch-btn btn btn-primary" >Punch Line ?</button>
  `;

  jokeData().then(console.warn);
};

const jokeEvent = () => {
  document.querySelector('#joke-btn').addEventListener('click', () => {
    jokeData().then((response) => {
      document.querySelector('#jokeDiv').innerHTML = response.setup;
      document.querySelector('#joke-btn').style.display = 'none';
      document.querySelector('#punchLine').style.display = 'block';
    });
  });
};

init();
jokeEvent();
