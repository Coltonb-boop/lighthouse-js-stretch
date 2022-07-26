let prompt = require("prompt-sync")();

let alreadyGuessed = [];
let trys = 0;
let randomNum = Math.ceil(Math.random() * 10);
let playing = true;

const guess = (num) => {
  if (num === 'exit') playing = false;
  if (isNaN(num)) return `Not a number. Try again!`;
  if (alreadyGuessed.includes(num)) return `Aready guessed!`;

  if (num > randomNum) {
    alreadyGuessed.push(num);
    trys++;
    return 'Too high!';
  } else if (num < randomNum) {
    alreadyGuessed.push(num);
    trys++;
    return 'Too low!';
  } else {
    trys++;
    playing = false;
    return `You got it! You took ${trys} attempts`;
  }
}

while(playing) {
  let answer = prompt("Guess a number: ");
  console.log(guess(answer));
}
