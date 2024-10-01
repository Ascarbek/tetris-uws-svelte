import type {
  ISubject,
  TSocketMessage,
  TCommonResponse,
  TRenderBoardRequest,
  TStartRequest,
  TEndRequest,
} from '@my-tetris/backend';
import { SocketMessageTypes, Subject } from '@my-tetris/backend';

export const StartSubject = new Subject<TCommonResponse>();
export const RenderBoardSubject = new Subject<TRenderBoardRequest>();
export const EndSubject = new Subject<TCommonResponse>();
export const plug = new Subject();

const MessageHandlerMap: Record<SocketMessageTypes, ISubject<any>> = {
  [SocketMessageTypes.START]: StartSubject,
  [SocketMessageTypes.RENDER_BOARD]: RenderBoardSubject,
  [SocketMessageTypes.END]: EndSubject,
  [SocketMessageTypes.MOVE_LEFT]: plug,
  [SocketMessageTypes.MOVE_RIGHT]: plug,
  [SocketMessageTypes.DROP]: plug,
};

export const MessageBroker = (message: TSocketMessage) => {
  const handler = MessageHandlerMap[message.type];
  handler.emit(message.body);
};
