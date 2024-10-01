import { getBoard, updateBoard } from './sessionBoard.js';
import { moveDown } from './moveDown.js';
import { addTetromino } from './addTetromino.js';
import { TETROMINO_BOX, TETROMINO_L, TETROMINO_LINE, TETROMINO_W, TETROMINO_Z } from './tetrominos.js';

export const gameTick: (id: string) => void = (id) => {
  const board = getBoard(id);

  const tArray = [TETROMINO_LINE, TETROMINO_BOX, TETROMINO_L, TETROMINO_Z, TETROMINO_W];

  const movedBoard = moveDown(board);
  updateBoard(id, movedBoard);
  const isThereMoving = movedBoard.some((c) => c < 0);
  if (!isThereMoving) {
    const addedBoard = addTetromino(movedBoard, tArray[Math.floor(Math.random() * tArray.length)]);
    updateBoard(id, addedBoard);
  }
};
