import { TDispatchItem } from '../../shapes/DispatchItems.js';
import { SendMessage } from '../socket/SendMessage.js';

export const Dispatch: (data: TDispatchItem, socket_id: string, message_id: string) => void = (
  data,
  socket_id,
  message_id
) => {
  SendMessage({ message_type: data.type, socket_id, message_id, request: data.body });
};
