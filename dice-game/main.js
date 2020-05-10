//console.log('Hello World!');

const output = document.querySelector('#output');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const btn = document.querySelector('button');
let score1 = 0,
  score2 = 0;
let limiter = 5;


btn.addEventListener('click', function () {
  // roll dice randomly
  const roll = num => {
    let rNum = Math.floor(Math.random() * num) + 1;
    let n = 9855 + rNum;
    let code = '&#' + n + ';';
    return code;
  }
  let temp;
  let rolls = [roll(6), roll(6)];
  player1.innerHTML = rolls[0];
  player2.innerHTML = rolls[1];
  //console.log(rolls);
  checkWinner(rolls[0], rolls[1]);

})
// score keeper function



// check the winner
function checkWinner(player1, player2) {
  let msg;
  if (player1 == player2) {
    msg = 'Draw Result!';
  } else if (player1 > player2) {
    msg = 'Player 1 wins!';
    score1++;
  } else {
    msg = 'Player 2 wins!';
    score2++;
  }
  let pl;
  if (score1 > limiter) {
    btn.classList.add('green');
    btn.setAttribute('disabled', 'disabled');
    alert(`Game Over, Player1 is the winner`);
  }
  if (score2 > limiter) {
    btn.classList.add('purple');
    btn.setAttribute('disabled', 'disabled');
    alert(`Game Over, Player2 is the winner`);
  }

  output.innerHTML = `
${msg}
<p>Player1 Score:${score1}| Player2 Score: ${score2}
  `;

}