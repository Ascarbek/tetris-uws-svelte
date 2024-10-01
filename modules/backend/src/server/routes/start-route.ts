import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { startRequestShape } from './start-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';
import { startHandler } from '../handlers/start-handler.js';

export const startRoute: TSocketMessageRoute = {
  input: startRequestShape,
  output: commonResponseShape,
  handler: startHandler,
};
