import { TMoveRequest } from '../routes/move-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { MoveTypes } from '../../app/moveTypes.js';
import { moveLeft } from '../../app/moveLeft.js';
import { getBoard, updateBoard } from '../../app/sessionBoard.js';

export const moveHandler: (params: TMoveRequest) => TCommonResponse = ({ time, move }) => {
  switch (move) {
    case MoveTypes.LEFT:
      const board = getBoard(time.toString());
      const movedBoard = moveLeft(board);
      updateBoard(time.toString(), movedBoard);
      break;
  }
  return {
    success: true,
  };
};
