'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
// getElementByID is supposed to be slightly faster.
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const scores = [0, 0];
let currentScore = 0;
// Experiment with using an array of players with each player in the corresponding index.
let activePlayer = 0;
// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const generateDiceResult = function() {
    return Math.trunc(Math.random() * 6) + 1
}

// Roll the dice
btnRoll.addEventListener('click', function() {
    const dice = generateDiceResult();
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0;
    };
})