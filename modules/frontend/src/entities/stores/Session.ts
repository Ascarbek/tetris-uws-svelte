import { writable } from 'svelte/store';

export const CurrentSession = writable(0);

export const IsGameOver = writable(false);
