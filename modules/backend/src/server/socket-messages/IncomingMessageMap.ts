import { SocketMessageTypes, TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';
import { startRoute } from '../routes/start-route.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.START]: startRoute,
  [SocketMessageTypes.RENDER_BOARD]: NotAllowedPlug,
  [SocketMessageTypes.END]: NotAllowedPlug,
  [SocketMessageTypes.MOVE_LEFT]: NotAllowedPlug,
  [SocketMessageTypes.MOVE_RIGHT]: NotAllowedPlug,
  [SocketMessageTypes.DROP]: NotAllowedPlug,
};

export const IncomingMessageNames: Record<SocketMessageTypes, string> = {
  [SocketMessageTypes.START]: 'start game',
  [SocketMessageTypes.RENDER_BOARD]: 'render board',
  [SocketMessageTypes.END]: 'end game',
  [SocketMessageTypes.MOVE_LEFT]: 'move left',
  [SocketMessageTypes.MOVE_RIGHT]: 'move right',
  [SocketMessageTypes.DROP]: 'drop',
};
