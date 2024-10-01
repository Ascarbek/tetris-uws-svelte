import { z } from 'zod';

export const ROW_COUNT = 21;
export const COL_COUNT = 11;

export const boardCellDataShape = z.array(z.number()).length(ROW_COUNT * COL_COUNT);

export type TBoardCellData = z.infer<typeof boardCellDataShape>;

export const emptyBoard = [...new Array(ROW_COUNT * COL_COUNT).fill(0)];
