import RoverRobot from './RoverRobot';
import generateMap from './marsMap';

const sampleInput = '5 3';
const roverTestcase = [
    {
        location: '1 1 E',
        commands: 'RFRFRFRF',
        expectedOutput: '1 1 E'
    },
    {
        location: '3 2 N',
        commands: 'FRRFLLFFRRFLL',
        expectedOutput: '3 3 N LOST'
    },
    {
        location: '0 3 W',
        commands: 'LLFFFLFLFL',
        expectedOutput: '2 3 S'
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
            expect(rover.alive).toEqual(true);
        });

    });

    describe('Rover test case 1', () => {

    });

});
