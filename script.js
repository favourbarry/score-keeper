const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const player1Score = document.querySelector('#p1Score');
const player2Score = document.querySelector('#p2Score');
const scoreList = document.querySelector('#scoreList');
const winningScoreSelect = document.querySelector('select[name="winningScore"]');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function() {
    if (!isGameOver && p1Score < winningScore) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            player1Score.classList.add('winner');
            player2Score.classList.add('loser');

        }
        player1Score.textContent = p1Score;
    }
})
p2Button.addEventListener('click', function() {
    if (!isGameOver && p2Score < winningScore) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            player2Score.classList.add('winner');
            player1Score.classList.add('loser');

        }
        player2Score.textContent = p2Score;
    }
}) 

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    resetButton.click();
})

resetButton.addEventListener('click', function() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1Score.textContent = p1Score;
    player2Score.textContent = p2Score;
    player1Score.classList.remove('winner', 'loser');
    player2Score.classList.remove('winner', 'loser');
})
