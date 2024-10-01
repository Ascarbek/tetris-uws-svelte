let handler: NodeJS.Timeout;

const sessionDelay: { [id: string]: number } = {};

let START_DELAY = 200;

export const startRunner = (cb: () => void) => {
  handler = setInterval(cb, START_DELAY);
};

export const stopRunner = () => {
  clearInterval(handler);
};
