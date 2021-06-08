'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
// getElementByID is supposed to be slightly faster.
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');