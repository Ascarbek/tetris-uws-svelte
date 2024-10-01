import { emptyBoard, TBoardCellData, TItemCellData } from '../shapes/LevelShapes.js';

const sessionBoard: { [id: string]: TBoardCellData } = {};
const sessionNextItem: { [id: string]: TItemCellData } = {};

export const getBoard = (id: string) => {
  return [...sessionBoard[id]];
};

export const newBoard = (id: string) => {
  sessionBoard[id] = [...emptyBoard];
};

export const updateBoard = (id: string, board: TBoardCellData) => {
  sessionBoard[id] = [...board];
};

export const updateNextItem = (id: string, item: TItemCellData) => {
  sessionNextItem[id] = [...item];
};

export const getNextItem = (id: string) => {
  return [...sessionNextItem[id]];
};
