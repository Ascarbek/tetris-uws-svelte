import { z } from 'zod';
import { SocketMessageTypes } from './SocketMessageShapes.js';
import { renderBoardRequestShape } from '../server/routes/render-board-shapes.js';
import { changeNextItemRequestShape } from '../server/routes/change-next-item-shapes.js';

export const dispatchItemShape = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(SocketMessageTypes.RENDER_BOARD),
    body: renderBoardRequestShape,
  }),
  z.object({
    type: z.literal(SocketMessageTypes.CHANGE_NEXT_ITEM),
    body: changeNextItemRequestShape,
  }),
  z.object({
    type: z.literal(SocketMessageTypes.GAME_OVER),
    body: z.object({}),
  }),
]);

export type TDispatchItem = z.infer<typeof dispatchItemShape>;

export type TDispatch = (item: TDispatchItem) => void;
