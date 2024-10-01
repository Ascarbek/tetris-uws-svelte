import { COL_COUNT, ROW_COUNT, TBoardCellData } from '../shapes/LevelShapes.js';
import { TETROMINO_COL_COUNT, TETROMINO_ROW_COUNT } from './tetrominos.js';

export const moveRotate: (board: TBoardCellData) => TBoardCellData = (board) => {
  const initialBoard = [...board];

  const isThereMoving = board.some((c) => c < 0);
  if (!isThereMoving) {
    return board;
  }

  let minRow = -1;
  let minCol = -1;

  // get first row of moving block
  for (let i = 0; i < ROW_COUNT; i++) {
    for (let j = 0; j < COL_COUNT; j++) {
      if (board[i * COL_COUNT + j] < 0 && minRow === -1) {
        minRow = i;
      }
    }
  }

  // get first column of moving block
  for (let j = 0; j < COL_COUNT; j++) {
    for (let i = 0; i < ROW_COUNT; i++) {
      if (board[i * COL_COUNT + j] < 0 && minCol === -1) {
        minCol = j;
      }
    }
  }

  // extract shape
  const shape: number[] = [];
  for (let i = 0; i < TETROMINO_ROW_COUNT; i++) {
    for (let j = 0; j < TETROMINO_COL_COUNT; j++) {
      if (minCol + j < COL_COUNT && board[(minRow + i) * COL_COUNT + minCol + j] < 0) {
        shape.push(board[(minRow + i) * COL_COUNT + minCol + j]);
        board[(minRow + i) * COL_COUNT + minCol + j] = 0;
      } else {
        shape.push(0);
      }
    }
  }

  const rotated: number[] = [];

  // rotate
  for (let i = 0; i < TETROMINO_ROW_COUNT; i++) {
    for (let j = 0; j < TETROMINO_COL_COUNT; j++) {
      rotated[i * TETROMINO_COL_COUNT + j] = shape[j * TETROMINO_COL_COUNT + TETROMINO_COL_COUNT - i - 1];
    }
  }

  // get number of empty top rows
  let emptyRows = 0;
  for (let i = 0; i < TETROMINO_ROW_COUNT; i++) {
    let isEmpty = true;
    for (let j = 0; j < TETROMINO_COL_COUNT; j++) {
      if (rotated[i * TETROMINO_COL_COUNT + j] !== 0) {
        isEmpty = false;
      }
    }
    if (isEmpty) {
      emptyRows++;
    } else {
      break;
    }
  }

  // get number of empty right columns
  let emptyColumns = 0;
  for (let j = TETROMINO_COL_COUNT - 1; j >= 0; j--) {
    let isEmpty = true;
    for (let i = 0; i < TETROMINO_ROW_COUNT; i++) {
      if (rotated[i * TETROMINO_COL_COUNT + j] !== 0) {
        isEmpty = false;
      }
    }
    if (isEmpty) {
      emptyColumns++;
    } else {
      break;
    }
  }

  for (let i = 0; i < TETROMINO_ROW_COUNT - emptyRows; i++) {
    for (let j = 0; j < TETROMINO_COL_COUNT - emptyColumns; j++) {
      let offset = 0;
      if (COL_COUNT - minCol < TETROMINO_COL_COUNT - emptyColumns) {
        offset = TETROMINO_COL_COUNT - emptyColumns - (COL_COUNT - minCol);
      }
      if (minCol + j - offset < COL_COUNT) {
        board[(minRow + i) * COL_COUNT + minCol + j - offset] = rotated[(i + emptyRows) * TETROMINO_COL_COUNT + j];
      }
    }
  }

  return board;
};
