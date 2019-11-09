import readline from 'readline';
import chalk from 'chalk';

import generateMap from './lib/marsMap';
import RoverRobot from "./lib/RoverRobot";
import { PROMPT } from "./constants";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mapOfMars;
const createNewLander = () => {
  rl.question(chalk.green.bold(PROMPT.LANDER_COORDINATES), (landingZone) => {
    if(landingZone === 'exit') process.exit();

    rl.question(chalk.green.bold(PROMPT.ROVER_COMMANDS), (commands) => {
      const rover = new RoverRobot(landingZone, mapOfMars);
      rover.loadCommands(commands);

      const roverResult = rover.move();
      console.log(chalk.red.bold(roverResult));

      createNewLander();
    });
  });
};

rl.question(chalk.green.bold(PROMPT.MARS_DIMENSIONS), (marsDimensions) => {
  mapOfMars = generateMap(marsDimensions);
  createNewLander();
});
