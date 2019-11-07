class RoverRobot {
  constructor(userInput, mapGrid){
    const parsedInput = this.parseLocationInput(userInput);

    this.location = [parsedInput.x, parsedInput.y];
    this.direction = parsedInput.direction;
    this.mapGrid = mapGrid;
    this.commandStack = [];
    this.alive = true;
  }

  parseLocationInput(userInput) {
    const parsedInput = userInput.split(' ');
    if(parsedInput.length != 3) throw('RoverRobot.parseLocationInput() requires a string with two parameters');

    return {
      x: parseInt(parsedInput[0], 10),
      y: parseInt(parsedInput[1], 10),
      direction: parsedInput[2]
    };
  }

  loadCommands(userCommands) {
    if( typeof userCommands !== 'string') throw('loadCommands() requires a string')
    this.commandStack = userCommands.split('');

  }

  move() {

    for(let i = 0; i<this.commandStack.length; i++) {
      console.log('step...')
    }

    return '1 1 E';
  }

  detectHazards() {

  }

  detectEdge() {

  }

}

export default RoverRobot;
