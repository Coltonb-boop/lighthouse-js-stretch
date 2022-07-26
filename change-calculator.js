const calculateChange = function(total, cash) {
  let denominations = [
    {name: 'twentyDollars', quantity: 0},
    {name: 'tenDollars', quantity: 0},
    {name: 'fiveDollars', quantity: 0},
    {name: 'twoDollars', quantity: 0},
    {name: 'oneDollar', quantity: 0},
    {name: 'quarter', quantity: 0},
    {name: 'dime', quantity: 0},
    {name: 'nickel', quantity: 0},
    {name: 'penny', quantity: 0}
  ]
  
  while (total < cash) {
    if (cash - total > 2000) {
      denominations[0].quantity++;
      total += 2000
    } else if (cash - total > 1000) {
      denominations[1].quantity++;
      total += 1000
    } else if (cash - total > 500) {
      denominations[2].quantity++;
      total += 500
    } else if (cash - total > 200) {
      denominations[3].quantity++;
      total += 200
    } else if (cash - total > 100) {
      denominations[4].quantity++;
      total += 100
    } else if (cash - total > 25) {
      denominations[5].quantity++;
      total += 25
    } else if (cash - total > 10) {
      denominations[6].quantity++;
      total += 10
    } else if (cash - total > 5) {
      denominations[7].quantity++;
      total += 5
    } else {
      denominations[8].quantity++;
      total += 1
    }
  }

  return denominations.filter(curr => curr.quantity > 0);
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
