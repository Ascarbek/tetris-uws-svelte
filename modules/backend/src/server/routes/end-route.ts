import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { endRequestShape } from './end-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';
import { endHandler } from '../handlers/end-handler.js';

export const endRoute: TSocketMessageRoute = {
  input: endRequestShape,
  output: commonResponseShape,
  handler: endHandler,
};
