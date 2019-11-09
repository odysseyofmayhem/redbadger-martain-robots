import { MAX_MAP_SIZE, ERROR } from "../constants";

const generateMap = (userInput) => {
  if(!userInput) throw(ERROR.MARS_MAP_BAD_INPUT);
  const parsedBounds = userInput.toUpperCase().trim().split(' ');

  if(parsedBounds.length !== 2) throw(ERROR.MARS_MAP_BAD_PARAMS);

  if(parsedBounds[0] > MAX_MAP_SIZE || parsedBounds[1] > MAX_MAP_SIZE) throw(ERROR.MARS_MAP_TOO_LARGE);

  return {
    bounds: {
      x: parseInt(parsedBounds[0], 10),
      y: parseInt(parsedBounds[1], 10)
    },
    hazards: [],
  };
};

export default generateMap;
