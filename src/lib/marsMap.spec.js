import generateMap from './marsMap';
import { ERROR } from "../constants";

describe('marsMap tests', () => {

  describe('initialisation', () => {

    it('it should generate a map struct', () => {
      expect(generateMap('10 10')).toEqual({
        bounds: {
          x: 10,
          y: 10
        },
        hazards: []
      });

      expect(generateMap('20 10')).toEqual({
        bounds: {
          x: 20,
          y: 10
        },
        hazards: []
      });
    });

    it('it should throw an error if init parameters are incorrect', () => {
      try {
        generateMap('100');
      }
      catch (e) {
        expect(e)
          .toBe(ERROR.MARS_MAP_BAD_PARAMS);
      }

      try {
        generateMap('100 100 N');
      }
      catch (e) {
        expect(e)
          .toBe(ERROR.MARS_MAP_BAD_PARAMS);
      }

    });

    it('it should throw an error if x or y are > 50', () => {
      try {
        generateMap('100 100');
      }
      catch (e) {
        expect(e)
          .toBe(ERROR.MARS_MAP_TOO_LARGE);
      }

    });

  });

});
