const sessionDelay: { [id: string]: number } = {};
const handlers: {
  [id: string]: NodeJS.Timeout;
} = {};

let START_DELAY = 200;

export const startRunner = (id: string, cb: () => void) => {
  handlers[id] = setInterval(cb, START_DELAY);
};

export const stopRunner = (id: string) => {
  clearInterval(handlers[id]);
};
