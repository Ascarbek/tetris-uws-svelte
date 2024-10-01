import { COL_COUNT, TBoardCellData } from '../shapes/LevelShapes.js';
import { TETROMINO_COL_COUNT, TETROMINO_ROW_COUNT } from './tetrominos.js';

export const addTetromino: (board: TBoardCellData, tetromino: number[][]) => TBoardCellData = (board, tetromino) => {
  const offset = 3;

  const initialBoard = [...board];

  for (let i = 0; i < TETROMINO_ROW_COUNT; i++) {
    for (let j = 0; j < TETROMINO_COL_COUNT; j++) {
      const cellCoord = i * COL_COUNT + offset + j;
      if (board[cellCoord] === 0) {
        board[cellCoord] = tetromino[i][j] * -1; // negative number used for moving cell
      } else {
        return initialBoard;
      }
    }
  }

  return board;
};
