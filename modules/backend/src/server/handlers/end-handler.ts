import { TCommonResponse } from '../../shapes/Common.js';
import { stopRunner } from '../../app/runner.js';
import { TDispatch } from '../../shapes/DispatchItems.js';
import { TEndRequest } from '../routes/end-shapes.js';

export const endHandler: (
  params: TEndRequest,
  dispatch: TDispatch,
  publish: TDispatch
) => Promise<TCommonResponse> = async ({ time }, dispatch, publish) => {
  stopRunner(time.toString());
  return {
    success: true,
  };
};
