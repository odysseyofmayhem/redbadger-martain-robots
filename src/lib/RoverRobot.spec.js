import RoverRobot from './RoverRobot';
import generateMap from './marsMap';

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

        it('should initialise the RoverRobot', () => {
            const mapGrid = generateMap('10 10');
            const rover = new RoverRobot('10 10 N', mapGrid);
            expect(rover.location).toEqual([10,10]);
            expect(rover.direction).toEqual('N');
            expect(rover.mapGrid).toEqual(mapGrid);
            expect(rover.commandStack).toEqual([]);
            expect(rover.alive).toEqual(true);
        });

    });

    describe('Rover should change directions', () => {
        const mapGrid = generateMap(sampleInput);
        const rover = new RoverRobot(roverTestcase[0].location, mapGrid);

        xit('should turn left towards NORTH', () => {
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
        const mapGrid = generateMap(sampleInput);
        const rover = new RoverRobot(roverTestcase[0].location, mapGrid);

        xit('should load commands into the rover', () => {
            rover.loadCommands(roverTestcase[0].commands);
            expect(rover.commandStack.length).toEqual(
              roverTestcase[0].commands.split('').length
            )
        });

        xit('should move the rover and return the correct output', () => {
           const result = rover.move();
           console.log(result)
           expect(result).toEqual(roverTestcase[0].result);
        });
    });

    describe('Rover test case 2', () => {
        const mapGrid = generateMap(sampleInput);
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
        const mapGrid = generateMap(sampleInput);
        const rover = new RoverRobot(roverTestcase[2].location, mapGrid);

        it('should load commands into the rover', () => {
            rover.loadCommands(roverTestcase[2].commands);
            expect(rover.commandStack.length).toEqual(
              roverTestcase[2].commands.split('').length
            )
        });

        xit('should move the rover and return the correct output', () => {
           const result = rover.move();
           expect(result).toEqual(roverTestcase[2].result);
        });
    });

});
