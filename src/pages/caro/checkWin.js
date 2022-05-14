const numTilesInBoard = 494;
const numTilesInRow = 26;
const numTilesInColumn = 19;

let case1 = true;
let case2 = true;
let case3 = true;
let case4 = true;

const isSameLine = (location, newLocation) => {
  const lineCurrent = Math.floor(location / numTilesInRow);
  const nextLine = Math.floor(newLocation / numTilesInRow);

  return lineCurrent !== nextLine;
};

const generalCheck = (board, location, value, i, step) => {
  const nextLocation1 = location + (i + step);
  const nextLocation2 = location + (i + step) * (numTilesInRow + 1);
  const nextLocation3 = location + (i + step) * (numTilesInRow - 1);
  const nextLocation4 = location + (i + step) * numTilesInRow;

  if (board[nextLocation1] !== value || isSameLine(location, nextLocation1))
    case1 = false;

  if (board[nextLocation2] !== value) case2 = false;

  if (board[nextLocation3] !== value) case3 = false;

  if (board[nextLocation4] !== value) case4 = false;
};

export const checkIsWin = (board, location, value) => {
  let step = -4;

  while (step <= 0) {
    for (let i = 0; i < 5; i++) generalCheck(board, location, value, i, step);

    if (case1 || case2 || case3 || case4) {
      return true;
    }

    case1 = true;
    case2 = true;
    case3 = true;
    case4 = true;
    step++;
  }
  return false;
};
