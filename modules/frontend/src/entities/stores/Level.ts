import { writable } from 'svelte/store';
import type { TBoardCellData, TItemCellData } from '@my-tetris/backend';
import { emptyBoard, emptyItem } from '@my-tetris/backend';

export const BoardCells = writable<TBoardCellData>(emptyBoard);
export const NextItemCells = writable<TItemCellData>(emptyItem);
