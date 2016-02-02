import { coinChange } from './coinChange';

describe('coinChange', () => {
  it('should return all possible change', () => {
    expect(coinChange(4, [1, 2, 3])).toEqual([
      [1, 1, 1, 1],
      [1, 1, 2],
      [1, 3],
      [2, 2]
    ]);

    expect(coinChange(10, [2, 5, 3, 6])).toEqual([
      [2, 2, 2, 2, 2],
      [2, 2, 3, 3],
      [2, 2, 6],
      [2, 5, 3],
      [5, 5]
    ]);
  });
});
