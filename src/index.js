import readline from 'readline';
import chalk from 'chalk';

import generateMap from './lib/marsMap';
import RoverRobot from "./lib/RoverRobot";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mapOfMars;
const createNewLander = () => {
  rl.question(chalk.green.bold('Please enter landing coordinates and direction for the next rover [exit to end]:  '), (landingZone) => {
    if(landingZone === 'exit') process.exit();

    rl.question(chalk.green.bold('Please enter commands for the Mars rover:  '), (commands) => {
      const rover = new RoverRobot(landingZone, mapOfMars);
      rover.loadCommands(commands);

      const roverResult = rover.move();
      console.log(chalk.red.bold(roverResult));

      createNewLander();
    });
  });
};

rl.question(chalk.green.bold('Please enter Mars dimensions (x y) EG: "10 10":  '), (marsDimensions) => {
  mapOfMars = generateMap(marsDimensions);
  createNewLander();
});
