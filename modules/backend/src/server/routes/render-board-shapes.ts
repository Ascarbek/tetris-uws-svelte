import { z } from 'zod';
import { boardCellDataShape } from '../../shapes/LevelShapes.js';

export const renderBoardRequestShape = z.object({
  time: z.number(),
  cells: boardCellDataShape,
});

export type TRenderBoardRequest = z.infer<typeof renderBoardRequestShape>;
