import { writable } from 'svelte/store';
import type { TSocketMessage } from '@my-tetris/backend';

export const MessageQueue = writable<TSocketMessage[]>([]);
