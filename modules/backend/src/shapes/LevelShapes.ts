import { z } from 'zod';
import { TETROMINO_COL_COUNT, TETROMINO_ROW_COUNT } from '../app/tetrominos.js';

export const ROW_COUNT = 21;
export const COL_COUNT = 11;

export const boardCellDataShape = z.array(z.number()).length(ROW_COUNT * COL_COUNT);
export const itemCellDataShape = z.array(z.number()).length(TETROMINO_ROW_COUNT * TETROMINO_COL_COUNT);

export type TBoardCellData = z.infer<typeof boardCellDataShape>;
export type TItemCellData = z.infer<typeof itemCellDataShape>;

export const emptyBoard = [...new Array(ROW_COUNT * COL_COUNT).fill(0)];
export const emptyItem = [...new Array(TETROMINO_ROW_COUNT * TETROMINO_COL_COUNT).fill(0)];
