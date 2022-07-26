const multiplicationTable = function(maxValue) 
{
  let outputString = '';

  for (let i = 1; i <= maxValue; i++) 
  {
    for (let x = 1; x <= maxValue; x++)
    {
      outputString += `${x * i} `;
    }

    outputString += '\n';
  }

  return outputString;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
