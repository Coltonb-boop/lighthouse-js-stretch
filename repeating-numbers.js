const repeatNumbers = (data) => {
  let value = '';
  if (!data) {
    return 'No data';
  }
  for (let subArr = 0; subArr < data.length; subArr++) {
    if (subArr > 0) {
      value += ', ';
    }

    for (let i = 0; i < data[subArr][1]; i++) {
      value += `${data[subArr][0]}`;
    }
  }

  return value;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
