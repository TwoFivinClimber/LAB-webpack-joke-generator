// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `<h1>Parse over and Get Your Jokes</h1><button id="joke-btn" type="button" class="joke-btn btn btn-primary" >Get a Joke</button>
  <button id="punch-btn" type="button" style='display: none' class="punch-btn btn btn-primary" >Get Punch Line</button><div id="jokeDiv"></div>
  `;
};

const jokeEvent = () => {
  document.querySelector('#joke-btn').addEventListener('click', () => {
    const jokeDiv = document.querySelector('#jokeDiv');
    const jokeBtn = document.querySelector('#joke-btn');
    const punchBtn = document.querySelector('#punch-btn');
    getJoke().then((response) => {
      jokeDiv.innerHTML = response.setup;
      jokeBtn.style.display = 'none';
      punchBtn.style.display = 'block';
      punchBtn.addEventListener('click', () => {
        jokeDiv.innerHTML = response.delivery;
        punchBtn.style.display = 'none';
        jokeBtn.style.display = 'block';
        jokeBtn.innerHTML = 'Get Another';
      });
    });
  });
};

init();
jokeEvent();
