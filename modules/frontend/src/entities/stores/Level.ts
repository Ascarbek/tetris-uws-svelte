import { writable } from 'svelte/store';
import type { TBoardCellData } from '@my-tetris/backend';
import { emptyBoard } from '@my-tetris/backend';

export const BoardCells = writable<TBoardCellData>(emptyBoard);
