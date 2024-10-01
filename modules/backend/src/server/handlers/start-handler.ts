import { TStartRequest } from '../routes/start-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';

export const startHandler: (params: TStartRequest) => Promise<TCommonResponse> = async ({ time }) => {
  return {
    success: true,
  };
};
