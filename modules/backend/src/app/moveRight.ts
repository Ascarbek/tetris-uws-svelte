import { COL_COUNT, ROW_COUNT, TBoardCellData } from '../shapes/LevelShapes.js';

export const moveRight: (inputBoard: TBoardCellData) => TBoardCellData = (inputBoard) => {
  const board = inputBoard;

  let canMove = true;
  // skip first column
  for (let j = 1; j < COL_COUNT; j++) {
    for (let i = 0; i < ROW_COUNT; i++) {
      // fixed cell
      if (board[i * COL_COUNT + j] > 0) {
        // a moving cell left of fixed cell
        if (board[i * COL_COUNT + j - 1] < 0) {
          canMove = false;
        }
      }
    }
  }
  // separate check for right line
  for (let i = 0; i < ROW_COUNT; i++) {
    if (board[i * COL_COUNT + COL_COUNT - 1] < 0) {
      canMove = false;
    }
  }

  if (canMove) {
    for (let j = COL_COUNT - 1; j >= 0; j--) {
      for (let i = 0; i < ROW_COUNT; i++) {
        if (j > 0) {
          if (board[i * COL_COUNT + j] < 0 || board[i * COL_COUNT + j - 1] < 0) {
            board[i * COL_COUNT + j] = board[i * COL_COUNT + j - 1];
          }
        } else {
          if (board[i * COL_COUNT + j] < 0) {
            board[i * COL_COUNT + j] = 0;
          }
        }
      }
    }
  }

  return board;
};
