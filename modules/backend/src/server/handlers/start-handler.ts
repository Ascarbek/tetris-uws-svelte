import { TStartRequest } from '../routes/start-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { startRunner } from '../../app/runner.js';
import { TDispatch } from '../../shapes/DispatchItems.js';
import { SocketMessageTypes } from '../../shapes/SocketMessageShapes.js';

export const startHandler: (
  params: TStartRequest,
  dispatch: TDispatch,
  publish: TDispatch
) => Promise<TCommonResponse> = async ({ time }, dispatch, publish) => {
  startRunner(() => {
    console.log('hello');
    publish({
      type: SocketMessageTypes.RENDER_BOARD,
      body: {
        cells: [],
      },
    });
  });
  return {
    success: true,
  };
};
