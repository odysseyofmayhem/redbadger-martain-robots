import generateMap from './marsMap';

describe('marsMap tests', () => {

  describe('initialisation', () => {

    it('it should generate a map struct', () => {
      const result = generateMap(10,10);

      expect(result).toEqual({
        bounds: {
          x: 10,
          y: 10
        },
        hazards: []
      });
    });

  });

});
