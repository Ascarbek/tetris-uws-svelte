import { TMoveRequest } from '../routes/move-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { MoveTypes } from '../../app/moveTypes.js';
import { moveLeft } from '../../app/moveLeft.js';
import { getBoard, updateBoard } from '../../app/sessionBoard.js';
import { moveRight } from '../../app/moveRight.js';
import { moveDown } from '../../app/moveDown.js';
import { moveRotate } from '../../app/moveRotate.js';
import { SocketMessageTypes } from '../../shapes/SocketMessageShapes.js';
import { TDispatch } from '../../shapes/DispatchItems.js';

export const moveHandler: (params: TMoveRequest, dispatch: TDispatch) => TCommonResponse = (
  { time, move },
  dispatch
) => {
  switch (move) {
    case MoveTypes.LEFT:
      {
        const board = getBoard(time.toString());
        const movedBoard = moveLeft(board);
        updateBoard(time.toString(), movedBoard);
      }
      break;
    case MoveTypes.RIGHT:
      {
        const board = getBoard(time.toString());
        const movedBoard = moveRight(board);
        updateBoard(time.toString(), movedBoard);
      }
      break;
    case MoveTypes.DROP:
      {
        let board = getBoard(time.toString());
        let isThereMoving = true;
        while (isThereMoving) {
          board = [...moveDown(board)];
          isThereMoving = board.some((c) => c < 0);
        }
        updateBoard(time.toString(), board);
      }
      break;
    case MoveTypes.ROTATE:
      {
        let board = getBoard(time.toString());
        const rotated = moveRotate(board);
        updateBoard(time.toString(), rotated);
      }
      break;
  }
  dispatch({
    type: SocketMessageTypes.RENDER_BOARD,
    body: {
      time: time,
      cells: getBoard(time.toString()),
    },
  });
  return {
    success: true,
  };
};
