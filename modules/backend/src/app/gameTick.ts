import { getBoard, getNextItem, updateBoard, updateNextItem } from './gameSession.js';
import { moveDown } from './moveDown.js';
import { addTetromino } from './addTetromino.js';
import { tArray } from './tetrominos.js';

export const gameTick: (id: string) => 'NORMAL' | 'GAME_OVER' | 'CHANGE_ITEM' = (id) => {
  const board = getBoard(id);

  const movedBoard = moveDown(board);
  updateBoard(id, movedBoard);

  if (!movedBoard.some((c) => c < 0)) {
    const nextTetronimo = getNextItem(id);
    const addedBoard = addTetromino(movedBoard, nextTetronimo);
    updateBoard(id, addedBoard);

    const newTetronimo = tArray[Math.floor(Math.random() * tArray.length)];
    updateNextItem(id, newTetronimo);

    if (!addedBoard.some((c) => c < 0)) {
      return 'GAME_OVER';
    }
    return 'CHANGE_ITEM';
  }
  return 'NORMAL';
};
