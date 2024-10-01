import { MessageSender } from '$features/messages/MessageSender';
import { SocketMessageTypes, Subject, type TRenderBoardRequest } from '@my-tetris/backend';
import { v4 as uid } from 'uuid';
import type { TEndRequest, TStartRequest } from '@my-tetris/backend';
import { RenderBoardSubject } from '$features/messages/MessageHandlerMap';
import { BoardCells } from '$stores/Level';

export const startGame = (params: TStartRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.START,
    body: params,
  });
};

export const endGame = (params: TEndRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.END,
    body: params,
  });
};

const onRenderBoard = (response: TRenderBoardRequest) => {
  BoardCells.set(response.cells);
};

RenderBoardSubject.subscribe(onRenderBoard);
