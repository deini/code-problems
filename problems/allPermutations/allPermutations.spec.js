import { allPermutations } from './allPermutations';

describe('allPermutations:', () => {
  it('should return all the permutations', () => {
    const results = [
      'aa',
      'ab',
      'ba',
      'bb'
    ];

    expect(allPermutations('ab')).toEqual(results);
  });
});
