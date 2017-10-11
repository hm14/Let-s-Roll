/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, currentPlayer, dice;

scores = [0, 0];
roundScore = 0;
// 0 for first player, 1 for second player
currentPlayer = 0;
// randomly generate a number between 1 and 6 inclusive
dice = Math.floor(Math.random()*6) + 1;

// select element with id current-0 or current-1 with document.querySelector('#score-0')
// read or change text of selected element using textContent

// set value
document.querySelector('#current-1').textContent = dice;

// use innerHTML to pass html as a string from js
document.querySelector('#current-' + currentPlayer).innerHTML = '<em>' + dice + '</em>';
dice = Math.floor(Math.random()*6) + 1;

// get value
var x = document.querySelector('#score-0').textContent;
console.log(x);

// hide element
document.querySelector('.dice').style.display = 'none';
