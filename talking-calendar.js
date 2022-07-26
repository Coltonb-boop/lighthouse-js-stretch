const talkingCalendar = function(date) {
  let tempString = date.split('/');
  
  return `${monthString(tempString[1])} ${numberSuffix(parseInt(tempString[2]))}, ${tempString[0]}`
};

const numberSuffix = (num) => {
  switch (num) {
    case 1: 
      return '1st';
    case 2: 
      return '2nd';
    case 3: 
      return '3rd';
    default: 
      return `${num}th`;
  }
}

const monthString = (num) => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return months[num - 1];
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
