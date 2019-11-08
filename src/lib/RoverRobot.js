import { DIRECTIONS, MOVE_OFFSET, COMPOUND_ACTIONS } from "../constants";

class RoverRobot {
  constructor(userInput, mapGrid){
    const parsedInput = this.parseLocationInput(userInput);

    this.location = [parsedInput.x, parsedInput.y];
    this.direction = parsedInput.direction;
    this.mapGrid = mapGrid;
    this.commandStack = [];
    this.actionCounter = 0;
    this.alive = true;
  }

  parseLocationInput(userInput) {
    const parsedInput = userInput.toUpperCase().split(' ');
    if(parsedInput.length !== 3) throw('RoverRobot.parseLocationInput() requires a string with three parameters');

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
    try {
      this.commandStack.forEach(command => {
        // Here we could intercept command code, and generate a sequence of
        // simple instructions that perform a more complex command.

        if(COMPOUND_ACTIONS[command] !== undefined) {
          const compoundCommandStack = COMPOUND_ACTIONS[command].split('');
          compoundCommandStack.forEach(singleCommand => this.moveAction(singleCommand));
        }
        else {
          this.moveAction(command);
        }

      });
    }

    catch(e) {
      // add hazard
      if(!this.mapGrid.hazards[this.outputLocation]) this.mapGrid.hazards.push(this.outputLocation);
      this.alive = false;

      return `${this.outputLocation} LOST`;
    }

    return this.outputLocation;
  }

  moveAction(command) {
    this.actionCounter++;

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
    ];

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

  get outputLocation() {
    return `${this.location[0]} ${this.location[1]} ${this.direction}`;
  }

}

export default RoverRobot;
