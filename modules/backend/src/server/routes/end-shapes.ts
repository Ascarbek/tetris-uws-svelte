import { z } from 'zod';

export const endRequestShape = z.object({
  time: z.number(),
});

export type TEndRequest = z.infer<typeof endRequestShape>;
