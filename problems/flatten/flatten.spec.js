import { flatten } from './flatten';

describe('Flatten:', () => {
  it('should return the same array if nothing is nested', () => {
    const array = [1, 2, 3, 4];

    expect(flatten(array)).toEqual(array);
  });

  it('should flatten a simple array', () => {
    const array = [1, 2, [3]];

    expect(flatten(array)).toEqual([1, 2, 3]);
  });

  it('should flatten a nested array', () => {
    const array = [1, 2, [3, [4]]];

    expect(flatten(array)).toEqual([1, 2, 3, 4]);
  });
});
