export const MAX_MAP_SIZE = 50;

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
