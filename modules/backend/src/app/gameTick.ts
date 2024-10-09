import { getBoard, getNextItem, updateBoard, updateNextItem } from './gameSession.js';
import { moveDown } from './moveDown.js';
import { addTetromino } from './addTetromino.js';
import { tArray } from './tetrominos.js';
import { clearFullLines } from './clearFullLines.js';

export const gameTick: (id: string) => 'NORMAL' | 'GAME_OVER' | 'CHANGE_ITEM' = (id) => {
  let board = getBoard(id);

  board = clearFullLines(board);
  board = moveDown(board);
  updateBoard(id, board);

  if (!board.some((c) => c < 0)) {
    const nextTetronimo = getNextItem(id);
    board = addTetromino(board, nextTetronimo);
    updateBoard(id, board);

    const newTetronimo = tArray[Math.floor(Math.random() * tArray.length)];
    updateNextItem(id, newTetronimo);

    if (!board.some((c) => c < 0)) {
      return 'GAME_OVER';
    }
    return 'CHANGE_ITEM';
  }
  return 'NORMAL';
};
