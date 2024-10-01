import { z } from 'zod';
import { MoveTypes } from '../../app/moveTypes.js';

export const moveRequestShape = z.object({
  time: z.number(),
  move: z.nativeEnum(MoveTypes),
});

export type TMoveRequest = z.infer<typeof moveRequestShape>;
