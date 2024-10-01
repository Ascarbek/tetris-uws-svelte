import { z } from 'zod';
import { boardCellDataShape } from '../../shapes/LevelShapes.js';

export const renderBoardRequestShape = z.object({
  cells: boardCellDataShape,
});

export type TRenderBoardRequest = z.infer<typeof renderBoardRequestShape>;
