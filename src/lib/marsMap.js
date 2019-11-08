import { MAX_MAP_SIZE } from "../constants";

const generateMap = (userInput) => {
  if(!userInput) throw('userInput must be a string and is required');
  const parsedBounds = userInput.toUpperCase().trim().split(' ');

  if(parsedBounds.length !== 2) throw('generateMap() requires a string with two parameters');

  if(parsedBounds[0] > MAX_MAP_SIZE || parsedBounds[1] > MAX_MAP_SIZE) throw(`The grid size is larger than the max of ${MAX_MAP_SIZE}`);

  return {
    bounds: {
      x: parseInt(parsedBounds[0], 10),
      y: parseInt(parsedBounds[1], 10)
    },
    hazards: [],
  };
};

export default generateMap;
