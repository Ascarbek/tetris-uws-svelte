import type {
  ISubject,
  TSocketMessage,
  TCommonResponse,
  TRenderBoardRequest,
  TStartRequest,
  TEndRequest,
  TChangeNextItemRequest,
} from '@my-tetris/backend';
import { SocketMessageTypes, Subject } from '@my-tetris/backend';

export const StartSubject = new Subject<TCommonResponse>();
export const RenderBoardSubject = new Subject<TRenderBoardRequest>();
export const EndSubject = new Subject<TCommonResponse>();
export const MoveSubject = new Subject<TCommonResponse>();
export const ChangeNextItemSubject = new Subject<TChangeNextItemRequest>();
export const GameOverSubject = new Subject<{}>();

const MessageHandlerMap: Record<SocketMessageTypes, ISubject<any>> = {
  [SocketMessageTypes.START]: StartSubject,
  [SocketMessageTypes.STOP]: EndSubject,
  [SocketMessageTypes.RENDER_BOARD]: RenderBoardSubject,
  [SocketMessageTypes.MOVE]: MoveSubject,
  [SocketMessageTypes.CHANGE_NEXT_ITEM]: ChangeNextItemSubject,
  [SocketMessageTypes.GAME_OVER]: GameOverSubject,
};

export const MessageBroker = (message: TSocketMessage) => {
  const handler = MessageHandlerMap[message.type];
  handler.emit(message.body);
};
