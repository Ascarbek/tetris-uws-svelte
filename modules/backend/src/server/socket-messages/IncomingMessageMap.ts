import { SocketMessageTypes, TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';
import { startRoute } from '../routes/start-route.js';
import { endRoute } from '../routes/end-route.js';
import { moveRoute } from '../routes/move-route.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.START]: startRoute,
  [SocketMessageTypes.RENDER_BOARD]: NotAllowedPlug,
  [SocketMessageTypes.END]: endRoute,
  [SocketMessageTypes.MOVE]: moveRoute,
};

export const IncomingMessageNames: Record<SocketMessageTypes, string> = {
  [SocketMessageTypes.START]: 'start game',
  [SocketMessageTypes.RENDER_BOARD]: 'render board',
  [SocketMessageTypes.END]: 'end game',
  [SocketMessageTypes.MOVE]: 'game move',
};
