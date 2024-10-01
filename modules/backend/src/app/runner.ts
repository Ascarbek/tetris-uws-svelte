let handler: NodeJS.Timeout;

export const startRunner = (cb: () => void) => {
  handler = setInterval(cb, 2000);
};

export const stopRunner = () => {
  clearInterval(handler);
};
