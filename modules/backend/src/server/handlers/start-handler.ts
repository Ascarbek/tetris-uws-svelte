import { TStartRequest } from '../routes/start-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { startRunner, stopRunner } from '../../app/runner.js';
import { TDispatch } from '../../shapes/DispatchItems.js';
import { SocketMessageTypes } from '../../shapes/SocketMessageShapes.js';
import { getBoard, getNextItem, newBoard } from '../../app/gameSession.js';
import { gameTick } from '../../app/gameTick.js';

export const startHandler: (params: TStartRequest, dispatch: TDispatch) => Promise<TCommonResponse> = async (
  { time },
  dispatch
) => {
  newBoard(time.toString());

  startRunner(time.toString(), () => {
    const status = gameTick(time.toString());
    switch (status) {
      case 'NORMAL':
        dispatch({
          type: SocketMessageTypes.RENDER_BOARD,
          body: {
            time: time,
            cells: getBoard(time.toString()),
          },
        });
        break;
      case 'CHANGE_ITEM':
        dispatch({
          type: SocketMessageTypes.RENDER_BOARD,
          body: {
            time: time,
            cells: getBoard(time.toString()),
          },
        });
        dispatch({
          type: SocketMessageTypes.CHANGE_NEXT_ITEM,
          body: {
            time: time,
            cells: getNextItem(time.toString()),
          },
        });
        break;
      case 'GAME_OVER':
        dispatch({
          type: SocketMessageTypes.GAME_OVER,
          body: {},
        });
        stopRunner(time.toString());
        break;
    }
  });
  return {
    success: true,
  };
};
