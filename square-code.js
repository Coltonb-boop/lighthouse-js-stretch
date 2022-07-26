const squareCode = function(message) {
  // Remove spaces, find # letters per line, write into square, and read back as secret code
  message = message.split(' ').join('');
  let perLine = Math.ceil(Math.sqrt(message.length));
  let lines = message.length / perLine;
  let count = 0;
  let tempArray = [];  // Holds square text pre secret
  let output = [];     // Will be temp array translated to secret// Will be temp array translated to secret

  for (let i = 0; i < lines; i++) {
    let currLine = '';
    for (let x = 0; x < perLine; x++) {
      if (count < message.length) {
        currLine += message[count];
        count++;
      }
    }
    tempArray.push(currLine);
  }

  for (let i = 0; i < perLine; i++) {
    let currLine = '';
    for (let x = 0; x < tempArray.length; x++) {
      if (tempArray[x][i]) {
        currLine += tempArray[x][i];
      }
    }
    output.push(currLine);
  }

  return output.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));