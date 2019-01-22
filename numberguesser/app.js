let min = 1,
    max = 10,
    winningNum = 2,
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

//Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number between ${min} and ${max}`,'red');
  }

  //check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    //set message
    setMessage(`${winningNum} is correct, You win !`,'green');
  }else{

  }
});
  //set message
  function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
  }
