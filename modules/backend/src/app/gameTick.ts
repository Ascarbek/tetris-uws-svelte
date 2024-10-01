import { getBoard, updateBoard, updateNextItem } from './gameSession.js';
import { moveDown } from './moveDown.js';
import { addTetromino } from './addTetromino.js';
import { TETROMINO_BOX, TETROMINO_L, TETROMINO_LINE, TETROMINO_W, TETROMINO_Z } from './tetrominos.js';

export const gameTick: (id: string) => 'NORMAL' | 'GAME_OVER' | 'CHANGE_ITEM' = (id) => {
  const board = getBoard(id);

  const tArray = [TETROMINO_LINE, TETROMINO_BOX, TETROMINO_L, TETROMINO_Z, TETROMINO_W];

  const movedBoard = moveDown(board);
  updateBoard(id, movedBoard);

  if (!movedBoard.some((c) => c < 0)) {
    const newTetronimo = tArray[Math.floor(Math.random() * tArray.length)];
    const tetFlat: number[] = [];
    newTetronimo.forEach((row) => {
      row.forEach((col) => tetFlat[col]);
    });
    updateNextItem(id, tetFlat);
    const addedBoard = addTetromino(movedBoard, newTetronimo);
    updateBoard(id, addedBoard);

    if (!addedBoard.some((c) => c < 0)) {
      return 'GAME_OVER';
    }
    return 'CHANGE_ITEM';
  }
  return 'NORMAL';
};
