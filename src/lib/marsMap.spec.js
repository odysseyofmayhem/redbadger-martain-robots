import generateMap from './marsMap';

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
          .toBe('generateMap() requires a string with two parameters');
      }

      try {
        generateMap('100 100 N');
      }
      catch (e) {
        expect(e)
          .toBe('generateMap() requires a string with two parameters');
      }

    });

    it('it should throw an error if x or y are > 50', () => {
      try {
        generateMap('100 100');
      }
      catch (e) {
        expect(e)
          .toBe('The grid size is larger than the max of 50');
      }

    });

  });

});
