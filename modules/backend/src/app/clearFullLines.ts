import { COL_COUNT, emptyBoard, ROW_COUNT, TBoardCellData } from '../shapes/LevelShapes.js';

export const clearFullLines: (inputBoard: TBoardCellData) => TBoardCellData = (inputBoard) => {
  const board = inputBoard;

  let fullLines: number[] = [];

  for (let i = 0; i < ROW_COUNT; i++) {
    let isFull = true;
    for (let j = 0; j < COL_COUNT; j++) {
      if (board[i * COL_COUNT + j] <= 0) {
        isFull = false;
      }
    }
    if (isFull) {
      fullLines.push(i);
    }
  }
  if (fullLines.length > 0) {
    console.log(fullLines);
  }

  let newBoard = [...emptyBoard];
  let newLine = ROW_COUNT - 1;

  for (let oldLine = ROW_COUNT - 1; oldLine >= 0; oldLine--) {
    if (fullLines.find((f) => f === oldLine)) {
      continue;
    }
    for (let j = 0; j < COL_COUNT; j++) {
      if (board[oldLine * COL_COUNT + j] >= 0) {
        newBoard[newLine * COL_COUNT + j] = board[oldLine * COL_COUNT + j];
      }
    }
    newLine--;
  }

  for (let i = 0; i < ROW_COUNT; i++) {
    for (let j = 0; j < COL_COUNT; j++) {
      if (board[i * COL_COUNT + j] < 0) {
        newBoard[i * COL_COUNT + j] = board[i * COL_COUNT + j];
      }
    }
  }

  return newBoard;
};
