import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { moveRequestShape } from './move-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';
import { moveHandler } from '../handlers/move-handler.js';

export const moveRoute: TSocketMessageRoute = {
  input: moveRequestShape,
  output: commonResponseShape,
  handler: moveHandler,
};
