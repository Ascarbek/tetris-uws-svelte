import { TStartRequest } from '../routes/start-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { startRunner } from '../../app/runner.js';
import { TDispatch } from '../../shapes/DispatchItems.js';
import { SocketMessageTypes } from '../../shapes/SocketMessageShapes.js';
import { getBoard, newBoard } from '../../app/sessionBoard.js';
import { gameTick } from '../../app/gameTick.js';

export const startHandler: (
  params: TStartRequest,
  dispatch: TDispatch,
  publish: TDispatch
) => Promise<TCommonResponse> = async ({ time }, dispatch, publish) => {
  newBoard(time.toString());

  startRunner(() => {
    gameTick(time.toString());
    dispatch({
      type: SocketMessageTypes.RENDER_BOARD,
      body: {
        cells: getBoard(time.toString()),
      },
    });
  });
  return {
    success: true,
  };
};
