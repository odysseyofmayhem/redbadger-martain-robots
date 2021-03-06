import RoverRobot from './RoverRobot';
import generateMap from './marsMap';
import { ERROR } from "../constants";

const sampleInput = '5 3';
const roverTestcase = [
    {
        location: '1 1 E',
        commands: 'RFRFRFRF',
        result: '1 1 E'
    },
    {
        location: '3 2 N',
        commands: 'FRRFLLFFRRFLL',
        result: '3 3 N LOST'
    },
    {
        location: '0 3 W',
        commands: 'LLFFFLFLFL',
        result: '2 3 S'
    }
];

describe('Robot Rover tests', () => {

    describe('initialisation', () => {
        const mapGrid = generateMap('10 10');

        it('should initialise the RoverRobot', () => {
            const rover = new RoverRobot('10 10 N', mapGrid);
            expect(rover.location).toEqual([10,10]);
            expect(rover.direction).toEqual('N');
            expect(rover.mapGrid).toEqual(mapGrid);
            expect(rover.commandStack).toEqual([]);
            expect(rover.alive).toEqual(true);
        });

        it('should throw an error with bad params', () => {
            try {
                new RoverRobot('10 10', mapGrid);
            }
            catch(e) {
                expect(e)
                  .toBe(ERROR.ROVER_BAD_PARAMS);
            }
        });

        it('should throw an error with bad commands', () => {
            try {
                const rover = new RoverRobot('10 10 N', mapGrid);
                rover.loadCommands();
            }
            catch(e) {
                expect(e)
                  .toBe(ERROR.ROVER_BAD_COMMANDS);
            }
        });
    });

    const mapGrid = generateMap(sampleInput);

    describe('Rover should change directions', () => {
        const rover = new RoverRobot(roverTestcase[0].location, mapGrid);

        it('should turn left towards NORTH', () => {
            expect(rover.direction).toEqual('E');
            rover.loadCommands('L');
            expect(rover.commandStack.length).toBe(1);

            rover.move();
            expect(rover.direction).toEqual('N');

            rover.loadCommands('R');
            expect(rover.commandStack.length).toBe(1);

            rover.move();
            expect(rover.direction).toEqual('E');
        });
    });

    describe('Rover test case 1', () => {
        const rover = new RoverRobot(roverTestcase[0].location, mapGrid);

        it('should load commands into the rover', () => {
            rover.loadCommands(roverTestcase[0].commands);
            expect(rover.commandStack.length).toEqual(
              roverTestcase[0].commands.split('').length
            )
        });

        it('should move the rover and return the correct output', () => {
           const result = rover.move();
           expect(result).toEqual(roverTestcase[0].result);
        });
    });

    describe('Rover test case 2', () => {
        const rover = new RoverRobot(roverTestcase[1].location, mapGrid);

        it('should load commands into the rover', () => {
            rover.loadCommands(roverTestcase[1].commands);
            expect(rover.commandStack.length).toEqual(
              roverTestcase[1].commands.split('').length
            )
        });

        it('should move the rover and return the correct output', () => {
            const result = rover.move();
            expect(result).toEqual(roverTestcase[1].result);
        });
    });

    describe('Rover test case 3', () => {
        const rover = new RoverRobot(roverTestcase[2].location, mapGrid);

        it('should load commands into the rover', () => {
            rover.loadCommands(roverTestcase[2].commands);
            expect(rover.commandStack.length).toEqual(
              roverTestcase[2].commands.split('').length
            )
        });

        it('should move the rover and return the correct output', () => {
            const result = rover.move();
            expect(result).toEqual(roverTestcase[2].result);
        });
    });

    describe('Test compound commands', () => {
        const testCaseDonut = {
          location: '1 1 E',
          commands: 'O',
          result: '1 1 E'
        };
        const testCaseTwoSteps = {
            location: '1 1 E',
            commands: '@',
            result: '2 1 E'
        };
        const testCaseDrawU = {
            location: '1 3 N',
            commands: 'U',
            result: '4 3 N'
        };

        it('should make the rover do a donut on Mars!', () => {
            const rover = new RoverRobot(testCaseDonut.location, mapGrid);
            rover.loadCommands(testCaseDonut.commands);

            const result = rover.move();
            expect(result).toEqual(testCaseDonut.result);
            expect(rover.actionCounter).toBe(4);
        });

        it('should make the rover go 2 steps forward, 1 step back and facing the original direction', () => {
            const rover = new RoverRobot(testCaseTwoSteps.location, mapGrid);
            rover.loadCommands(testCaseTwoSteps.commands);

            const result = rover.move();
            expect(result).toEqual(testCaseTwoSteps.result);
            expect(rover.actionCounter).toBe(7);
        });

        it('should make the rover draw a U on the surface of mars', () => {
            const rover = new RoverRobot(testCaseDrawU.location, mapGrid);
            rover.loadCommands(testCaseDrawU.commands);

            const result = rover.move();
            expect(result).toEqual(testCaseDrawU.result);
            expect(rover.actionCounter).toBe(13);
        });
    })

});
