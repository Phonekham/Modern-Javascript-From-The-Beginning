let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;
//UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play agin event
game.addEventListener('mousedown', function(e){
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

//Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`,'red');
  }

  //check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, You win !`);
  }else{
    //Wrong number
    guessesLeft -= 1;
    if (guessesLeft == 0) {
         gameOver(false, `Game over, You lost, The correct number was ${winningNum}`);
    }else{
      //game continue
      setMessage(`Guess is not correct ${guessesLeft} guesses Left`, 'red');
      guessInput.value = '';
    }
  }
});

//Game over
function gameOver(won,msg){

  let color;
  won === true ? color = 'green' : color = 'red';
   guessInput.disabled = true;
   message.style.color = color;
   guessInput.style.borderColor = color;
   //set message
   setMessage(msg);

   //play again
   guessBtn.value = 'Play again';
   guessBtn.className += 'play-again';
}

  //set message
  function setMessage(msg,color){ 
    message.style.color = color;
    message.textContent = msg;
  }

  //getWinningNum
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
