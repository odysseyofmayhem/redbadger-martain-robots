const MAX_SIZE = 50;

const generateMap = (xMax, yMax) => {
  if(xMax > MAX_SIZE || yMax > MAX_SIZE) throw(`The grid size is larger than the max of ${MAX_SIZE}`);

  return {
    bounds: {
      x: xMax,
      y: yMax
    },
    hazards: [],
  };
};

export default generateMap;

