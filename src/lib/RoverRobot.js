const DIRECTIONS = 'NESW';
const MOVE_OFFSET = {
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

class RoverRobot {
  constructor(userInput, mapGrid){
    const parsedInput = this.parseLocationInput(userInput);

    this.location = [parsedInput.x, parsedInput.y];
    this.direction = parsedInput.direction;
    this.mapGrid = mapGrid;
    this.commandStack = [];
    this.alive = true;
  }

  static parseLocationInput(userInput) {
    const parsedInput = userInput.split(' ');
    if(parsedInput.length !== 3) throw('RoverRobot.parseLocationInput() requires a string with two parameters');

    return {
      x: parseInt(parsedInput[0], 10),
      y: parseInt(parsedInput[1], 10),
      direction: parsedInput[2]
    };
  }

  loadCommands(userCommands) {
    if( typeof userCommands !== 'string') throw('loadCommands() requires a string');
    this.commandStack = userCommands.split('');

  }

  move() {

    try{
      this.commandStack.forEach( command => {
        if(command !== 'F'){
          this.changeDirection(command);
          return;
        }

        const commandOffset = MOVE_OFFSET[this.direction];

        const newLocation = {
          x: this.location[0] + commandOffset.x,
          y: this.location[1] + commandOffset.y,
        };

        // check hazards
        if(this.detectHazards(this.location[0], this.location[1], this.direction)){
          return;
        }

        // check bounds
        if(this.detectEdge(newLocation.x, newLocation.y)) {
          throw('edge');
        }

        // Make a move...
        this.location = [
          newLocation.x,
          newLocation.y
        ]
      });
    }

    catch(e) {
      const message = `${this.location[0]} ${this.location[1]} ${this.direction}`;

      // add hazard
      if(!this.mapGrid.hazards[message]) this.mapGrid.hazards.push(message);

      return `${message} LOST`;
    }



    return `${this.location[0]} ${this.location[1]} ${this.direction}`;
  }

  changeDirection(command) {
    let index = DIRECTIONS.search(this.direction);

    if(command === 'L') {
      index += 3;
    }
    if(command === 'R') {
      index += 1;
    }

    this.direction = DIRECTIONS[index % 4];
  }

  detectHazards(x, y, d) {
    return this.mapGrid.hazards.includes(`${x} ${y} ${d}`);
  }

  detectEdge(x, y) {
    return (x < 0 || y < 0 || x > this.mapGrid.bounds.x || y > this.mapGrid.bounds.y);
  }

}

export default RoverRobot;
