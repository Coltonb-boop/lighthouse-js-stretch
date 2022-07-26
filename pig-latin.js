'use strict';

let input = process.argv;

const piglatify = (english) => {
  if (!english) return; // check if argument is undefined

  let output = '';
  let words = english.slice(2);
  
  // loop through words array and add each word individually to output
  for (let word of words) {
    // If word is long enough, start at 2 character and then add the first letter to the end with ay
    if (word.length > 1) {
      for (let i = 1; i < word.length; i++) {
        output += word[i];
      }
    }
    output += word[0] + 'ay ';
  }
  console.log(output.trim());
}

piglatify(input);