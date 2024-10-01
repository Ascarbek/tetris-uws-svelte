import { z } from 'zod';

export const endRequestShape = z.object({});

export type TEndRequest = z.infer<typeof endRequestShape>;
