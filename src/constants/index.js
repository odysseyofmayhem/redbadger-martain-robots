// marsMap
export const MAX_MAP_SIZE = 50;

// RoverRobot
export const DIRECTIONS = 'NESW';
export const MOVE_OFFSET = {
  'N':{
    x: 0, y: 1
  },
  'E':{
    x: 1, y: 0
  },
  'S':{
    x: 0, y: -1
  },
  'W':{
    x: -1, y: 0
  },
};

// Compound instructions, turn one command into many commands
export const COMPOUND_ACTIONS = {
  'O': 'RRRR',          // Rover doing a very slow donut
  '@': 'FFRRFLL',       // Two steps forward, one step back
  'U': 'RRFFFLFFFLFFF'  // Draw a U in the martian sand
};

// UI Prompts
export const PROMPT = {
  MARS_DIMENSIONS: 'Please enter Mars dimensions (x y) EG: "10 10": ',
  LANDER_COORDINATES: 'Please enter landing coordinates and direction for the next rover [exit to end]: ',
  ROVER_COMMANDS: 'Please enter commands for the Mars rover: '
};

export const ERROR = {
  MARS_MAP_BAD_INPUT: 'userInput must be a string and is required',
  MARS_MAP_BAD_PARAMS: 'generateMap() requires a string with two parameters',
  MARS_MAP_TOO_LARGE: `The grid size is larger than the max of ${MAX_MAP_SIZE}`,
  ROVER_BAD_PARAMS: 'RoverRobot.parseLocationInput() requires a string with three parameters',
  ROVER_BAD_COMMANDS: 'loadCommands() requires a string',
  ROVER_DETECT_EDGE: 'Edge detected'
};
