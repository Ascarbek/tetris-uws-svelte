import dotenv from 'dotenv';

dotenv.config();

export const SOCKET_PATH = process.env.SOCKET_PATH || '/tetris';
export const SERVER_PORT: number = parseInt(process.env.PORT || '') || 8080;
