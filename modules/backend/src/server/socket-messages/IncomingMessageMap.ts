import { SocketMessageTypes, TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';
import { startRoute } from '../routes/start-route.js';
import { endRoute } from '../routes/end-route.js';
import { moveRoute } from '../routes/move-route.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.START]: startRoute,
  [SocketMessageTypes.STOP]: endRoute,
  [SocketMessageTypes.RENDER_BOARD]: NotAllowedPlug,
  [SocketMessageTypes.MOVE]: moveRoute,
  [SocketMessageTypes.CHANGE_NEXT_ITEM]: NotAllowedPlug,
  [SocketMessageTypes.GAME_OVER]: NotAllowedPlug,
};

export const IncomingMessageNames: Record<SocketMessageTypes, string> = {
  [SocketMessageTypes.START]: 'start game',
  [SocketMessageTypes.STOP]: 'end game',
  [SocketMessageTypes.RENDER_BOARD]: 'render board',
  [SocketMessageTypes.MOVE]: 'game move',
  [SocketMessageTypes.CHANGE_NEXT_ITEM]: 'change next item',
  [SocketMessageTypes.GAME_OVER]: 'game over',
};
