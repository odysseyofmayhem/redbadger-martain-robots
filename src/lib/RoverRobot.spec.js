import RoverRobot from './RoverRobot';
import generateMap from './marsMap';

describe('Robot Rover tests', () => {

    describe('initialisation', () => {

        it('should initialise the RoverRobot', () => {
            const mapGrid = generateMap(10,10);
            const rover = new RoverRobot([10,10], 'N', mapGrid);
            expect(rover.location).toEqual([10,10]);
            expect(rover.direction).toEqual('N');
            expect(rover.mapGrid).toEqual(mapGrid);
        });

    });

});
