/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, currentPlayer, winner;

scores = [0, 0];
roundScore = 0;
// 0 for first player, 1 for second player
currentPlayer = 0;
winner = false;

// resets all scores to zero
function resetScores() {
  // get element by id instead of using query slecetor
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  // hide dice element
  document.querySelector('.dice').style.display = 'none';
  // rest winner
  winner = false;
};


function play() {
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
    if (winner) {
      resetScores();
    }
      // 1) randomly generate a number between 1 and 6 inclusive
      var dice = Math.floor(Math.random()*6) + 1;

      // 2) display outcome of roll after value of dice is set
      document.querySelector('#score-' + currentPlayer).textContent = dice;

      // 3) update and show dice element
      // select and save value dice DOM element
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      // update img src of dice DOM element
      diceDOM.src = 'dice-' + dice + '.png';

      // 4) update and show round score
      roundScore = document.querySelector('#current-' + currentPlayer).textContent;
      roundScore = parseInt(roundScore) + dice;
      // display round score
      document.querySelector('#current-' + currentPlayer).textContent = roundScore;

      // 5) decide winner
      if (roundScore >= 100) {
        document.querySelector('#score-' + currentPlayer).textContent = 'Won!';
        // hide roll dice button
        document.querySelector('.btn-roll').style.display = 'none';
        winner = true;
      }
      else {
        // remove current player as active player
        document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
        // ternary operator
        currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
        // add new current player as active player
        document.querySelector('.player-' + currentPlayer + '-panel').classList.add('active');
        // hide dice image
        // document.querySelector('.dice').style.display = 'none';
      }
  });
};

function start() {
  resetScores();
  play();
};

start();
