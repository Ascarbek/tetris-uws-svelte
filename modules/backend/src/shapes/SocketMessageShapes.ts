import { z } from 'zod';
import { TDispatch } from './DispatchItems.js';

export enum SocketMessageTypes {
  START,
  RENDER_BOARD,
  END,
  MOVE_LEFT,
  MOVE_RIGHT,
  DROP,
}

export const socketMessageShape = z.object({
  id: z.string(),
  type: z.nativeEnum(SocketMessageTypes),
  body: z.any(),
});

export type TSocketMessage = z.infer<typeof socketMessageShape>;

export type TSocketMessageRoute = {
  input: z.AnyZodObject;
  output: z.AnyZodObject | z.ZodDiscriminatedUnion<any, any> | z.ZodVoid;
  handler: (params: any, dispatch: TDispatch, publish: TDispatch) => any;
};
