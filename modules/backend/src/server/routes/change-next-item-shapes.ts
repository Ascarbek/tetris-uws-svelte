import { z } from 'zod';
import { itemCellDataShape } from '../../shapes/LevelShapes.js';

export const changeNextItemRequestShape = z.object({
  time: z.number(),
  cells: itemCellDataShape,
});

export type TChangeNextItemRequest = z.infer<typeof changeNextItemRequestShape>;
