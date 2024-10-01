import { z } from 'zod';

export const startRequestShape = z.object({
  time: z.number(),
});

export type TStartRequest = z.infer<typeof startRequestShape>;
