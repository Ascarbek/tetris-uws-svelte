import { COL_COUNT, ROW_COUNT, TBoardCellData } from '../shapes/LevelShapes.js';

export const moveDown: (inputBoard: TBoardCellData) => TBoardCellData = (inputBoard) => {
  const board = inputBoard;

  const isThereMoving = board.some((c) => c < 0);
  if (!isThereMoving) {
    return board;
  }

  let canMove = true;
  // skip first row
  for (let i = ROW_COUNT - 1; i > 0; i--) {
    for (let j = 0; j < COL_COUNT; j++) {
      // fixed cell
      if (board[i * COL_COUNT + j] > 0) {
        // moving cell above fixed
        if (board[(i - 1) * COL_COUNT + j] < 0) {
          canMove = false;
        }
      }
    }
  }
  // separate check for bottom line
  for (let j = 0; j < COL_COUNT; j++) {
    if (board[(ROW_COUNT - 1) * COL_COUNT + j] < 0) {
      canMove = false;
    }
  }

  if (!canMove) {
    // convert moving cell to fixed cell
    for (let i = 0; i < ROW_COUNT; i++) {
      for (let j = 0; j < COL_COUNT; j++) {
        if (board[i * COL_COUNT + j] < 0) {
          board[i * COL_COUNT + j] = board[i * COL_COUNT + j] * -1;
        }
      }
    }
  } else {
    for (let i = ROW_COUNT - 1; i >= 0; i--) {
      for (let j = 0; j < COL_COUNT; j++) {
        if (i > 0) {
          if (board[(i - 1) * COL_COUNT + j] < 0 || board[i * COL_COUNT + j] < 0) {
            board[i * COL_COUNT + j] = board[(i - 1) * COL_COUNT + j];
          }
        } else {
          board[i * COL_COUNT + j] = 0;
        }
      }
    }
  }

  return board;
};
