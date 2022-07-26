const makeCase = function(input, caseDesired) {
  let newString = '';
  let capNext = false;
  let temp = '';
  
  //Check high prio cases first
  if (caseDesired.includes('camel')) {
    newString = '';
    capNext = false;

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
  }

  if (caseDesired.includes('pascal')){
    newString = '';
    capNext = true;

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
  }

  if (caseDesired.includes('snake')){
    newString = '';

    for (let curr of input) {
      if (curr === ' ') {
        newString += '_';
      } else {
        newString += curr;
      }
    }
  }

  if (caseDesired.includes('kebab')){
    newString = '';

    for (let curr of input) {
      if (curr === ' ') {
        newString += '-';
      } else {
        newString += curr;
      }
    }
  }

  if (caseDesired.includes('title')){
    newString = '';
    capNext = true;

    for (let curr of input) {
      if (curr === ' ') {
        newString += curr.toUpperCase();
        capNext = true;
      } else if (capNext && curr !== ' ') {
        newString += curr.toUpperCase();
        capNext = false;
      } else {
        newString += curr;
      }
    }
  }


  //Check secondary prio next
  if (caseDesired.includes('vowel')) {
    newString ? temp = newString : temp = input;
    newString = '';
    capNext = false;

    for (let curr of temp) {
      if ('aeiouAEIOU'.indexOf(curr) != -1) {
        newString += curr.toUpperCase();
      } else {
        newString += curr;
      }
    }
  }

  if(caseDesired.includes('consonant')) {
    newString ? temp = newString : temp = input;
    newString = '';
    capNext = false;

    for (let curr of temp) {
      if ('aeiouAEIOU'.indexOf(curr) != -1) {
        newString += curr;
      } else {
        newString += curr.toUpperCase();
      }
    }
  }

  //Check low prio last
  if (caseDesired.includes('upper')) {
    newString ? temp = newString : temp = input;
    newString = '';
    capNext = false;

    for (let curr of temp) {
      if (curr !== ' ') {
        newString += curr.toUpperCase();
      } else {
        newString += curr;
      }
    }
  }

  if (caseDesired.includes('lower')) {
    newString ? temp = newString : temp = input;
    newString = '';
    capNext = false;

    for (let curr of temp) {
      if (curr !== ' ') {
        newString += curr.toLowerCase();
      } else {
        newString += curr;
      }
    }
  }

  return newString;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
