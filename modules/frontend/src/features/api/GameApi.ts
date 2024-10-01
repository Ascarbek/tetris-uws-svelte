import { MessageSender } from '$features/messages/MessageSender';
import { SocketMessageTypes, type TChangeNextItemRequest } from '@my-tetris/backend';
import type { TMoveRequest, TRenderBoardRequest } from '@my-tetris/backend';
import { v4 as uid } from 'uuid';
import type { TEndRequest, TStartRequest } from '@my-tetris/backend';
import { ChangeNextItemSubject, GameOverSubject, RenderBoardSubject } from '$features/messages/MessageHandlerMap';
import { BoardCells, NextItemCells } from '$stores/Level';
import { CurrentSession, IsGameOver } from '$stores/Session';
import { get } from 'svelte/store';

export const startGame = (params: TStartRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.START,
    body: params,
  });
};

export const stopGame = (params: TEndRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.STOP,
    body: params,
  });
};

export const makeMove = (params: TMoveRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.MOVE,
    body: params,
  });
};

const onRenderBoard = (response: TRenderBoardRequest) => {
  const currentSession = get(CurrentSession);
  if (currentSession === response.time) {
    BoardCells.set(response.cells);
  }
};

const onChangeNextItem = (response: TChangeNextItemRequest) => {
  const currentSession = get(CurrentSession);
  if (currentSession === response.time) {
    NextItemCells.set(response.cells);
  }
};

const onGameOver = () => {
  IsGameOver.set(true);
};

RenderBoardSubject.subscribe(onRenderBoard);
ChangeNextItemSubject.subscribe(onChangeNextItem);
GameOverSubject.subscribe(onGameOver);
