const blocksAway = function(directions) {
  let output = {};
  let start = [0, 0];
  let lastMove = 'north';

  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] === 'right') {
      if (lastMove === 'east') {
        start[1] -= directions[i + 1];
        lastMove = 'south';
      }
      else if (lastMove === 'west') {
        start[1] += directions[i + 1];
        lastMove = 'north';
      }
      else if (lastMove === 'north') {
        start[0] += directions[i + 1];
        lastMove = 'east';
      }
      else if (lastMove === 'south') {
        start[0] -= directions[i + 1];
        lastMove = 'west';
      }
    }
    if (directions[i] === 'left') {
      if (lastMove === 'east') {
        start[1] += directions[i + 1];
        lastMove = 'north';
      }
      else if (lastMove === 'west') {
        start[1] -= directions[i + 1];
        lastMove = 'south';
      }
      else if (lastMove === 'north') {
        start[0] -= directions[i + 1];
        lastMove = 'west';
      }
      else if (lastMove === 'south') {
        start[0] += directions[i + 1];
        lastMove = 'east';
      }
    }
  }
  start[0] > 0 ? output['east'] = Math.abs(start[0]) : output['west'] = Math.abs(start[0]);
  start[1] > 0 ? output['north'] = Math.abs(start[1]) : output['south'] = Math.abs(start[1]);
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
