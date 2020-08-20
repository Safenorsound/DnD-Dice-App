var scores, d2;

// init();

document.querySelector('.d2-btn-roll').addEventListener('click', function () {
  // 1. Random dice rolls
  d2 = Math.floor(Math.random() * 2) + 1;
  document.getElementById('d2').style.display = 'block';
  document.getElementById('d2').src = 'd-' + d2;
});

//     document.querySelector('.btn-roll').addEventListener('click', function() {

//     var d4 = Math.floor(Math.random() * 4) + 1;
//     var d6 = Math.floor(Math.random() * 6) + 1;
//     var d8 = Math.floor(Math.random() * 8) + 1;
//     var d10 = Math.floor(Math.random() * 10) + 1;
//     var d12 = Math.floor(Math.random() * 12) + 1;
//     var d20 = Math.floor(Math.random() * 20) + 1;
//     var d100 = Math.floor(Math.random() * 100) + 1;

//     // Display the Result
//     document.getElementById('d2').style.display = 'block';
//     document.getElementById('dice-2').style.display = 'block';
//     document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';

//     // Update the UI
//     document.querySelector('#score-').textContent = scores;
// }

// function init() {
//     scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//     document.getElementById('dice-1').style.display = 'none';
//     document.getElementById('dice-2').style.display = 'none';

//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
// }
