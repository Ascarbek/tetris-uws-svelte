import { SocketMessageTypes, TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.START]: NotAllowedPlug,
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
