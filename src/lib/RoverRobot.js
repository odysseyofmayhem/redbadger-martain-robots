class RoverRobot {
  constructor(userInput, mapGrid){
    const parsedInput = this.parseLocationInput(userInput);

    this.location = [parsedInput.x, parsedInput.y];
    this.direction = parsedInput.direction;
    this.mapGrid = mapGrid;
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

  move() {

  }

  detectHazards() {

  }

  detectEdge() {

  }

}

export default RoverRobot;
