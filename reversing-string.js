'use strict'

let input = process.argv;

const reverse = (words) => {
  if (words < 2) return console.log("Please enter a word or phrase");
  let wordsSliced = words.slice(2);

  for (let word of wordsSliced) {
    let output = '';
    for (let i = word.length - 1; i >= 0; i--) {
      output += word[i];
    }
    console.log(output);
  }
}

reverse(input);