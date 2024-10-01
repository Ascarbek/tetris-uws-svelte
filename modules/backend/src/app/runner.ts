const sessionDelay: { [id: string]: number } = {};
const handlers: {
  [id: string]: NodeJS.Timeout;
} = {};

let START_DELAY = 200;

export const startRunner = (id: string, cb: () => void) => {
  if (handlers[id]) {
    clearInterval(handlers[id]);
  }
  handlers[id] = setInterval(cb, START_DELAY);
};

export const stopRunner = (id: string) => {
  if (handlers[id]) {
    clearInterval(handlers[id]);
  }
};
