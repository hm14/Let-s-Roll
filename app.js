/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, currentPlayer;

scores = [0, 0];
roundScore = 0;
// 0 for first player, 1 for second player
currentPlayer = 0;


// hide element
document.querySelector('.dice').style.display = 'none';

// get element by id instead of using query slecetor
document.getElementById('score-0').textContent = '0';

// add event listener after selecting an element
// takes 2 arguments:
// 1) event type (click, hover etc.) and
// 2) the function that will be called when the event happens
// skip () after function name because you want it to be called by event listener
// btn() will be defined as a function
// document.querySelector('.btn-roll').addEventListener('click', btn);
// OR
// the function here can only be used here and not anywhere else
// this is an anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {
  // randomly generate a number between 1 and 6 inclusive
  var dice = Math.floor(Math.random()*6) + 1;
  // display outcome of roll after value of dice is set
  document.querySelector('#current-' + currentPlayer).textContent = dice;
  // seleta nd save value dice DOM element
  var diceDOM = document.querySelector('.dice');
  // show dice element
  diceDOM.style.display = 'block';
  // update img src of dice DOM element
  diceDOM.src = 'dice-' + dice + '.png';
  // update round score
  roundScore = document.querySelector('#score-' + currentPlayer).textContent;
  roundScore = parseInt(roundScore) + (dice);
  console.log(roundScore + 1)
  // roundScore = parseInt(roundScore) + parseInt(dice);
  // display round score
  document.querySelector('#score-' + currentPlayer).textContent = roundScore;
});
