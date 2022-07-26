const camelCase = function(input) {
  let newString = '';
  let capNext = false;

  for (let curr of input) {
    if (curr === ' ') {
      capNext = true;
    } else if (capNext && curr !== ' ') {
      newString += curr.toUpperCase();
      capNext = false;
    } else {
      newString += curr;
    }
  }

  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
