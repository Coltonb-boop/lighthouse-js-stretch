// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
let whiteQueen = [0, 0];
let blackQueen = [5, 7];

const generateBoard = (white, black) => {
  let board = [];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      board[x] ? board[x].push(0) : board[x] = [0];
    }
  }
  board[white[0]][white[1]] = 1;
  board[black[0]][black[1]] = 1;
  return board;
}

const queenThreat = (board) => {
  let count = 1;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[x][y] === 1) {
        console.log(`${x}, ${y}`);
        while (count < 8) {
          if (x + count <= 8 && y + count < 8 && board[x + count][y + count] === 1) {
            return true;
          }
          if (x - count >= 0 && y + count < 8 && board[x - count][y + count] === 1) {
            return true;
          }
          if (x + count < 8 && y - count >= 0 && board[x + count][y - count] === 1) {
            return true;
          }
          if (x - count >= 0 && y - count >= 0 && board[x - count][y - count] === 1) {
            return true;
          }
          count++;
        }
      }
      count = 1;
    }
  }
  return false;
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
