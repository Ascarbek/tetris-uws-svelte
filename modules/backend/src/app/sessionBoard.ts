import { emptyBoard, TBoardCellData } from '../shapes/LevelShapes.js';

const sessionBoard: { [id: string]: TBoardCellData } = {};

export const getBoard = (id: string) => {
  return [...sessionBoard[id]];
};

export const newBoard = (id: string) => {
  sessionBoard[id] = [...emptyBoard];
};

export const updateBoard = (id: string, board: TBoardCellData) => {
  sessionBoard[id] = [...board];
};
