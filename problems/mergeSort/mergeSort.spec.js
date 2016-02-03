import { mergeSort } from './mergeSort';

describe('mergeSort:', () => {
  it('should sort', () => {
    expect(mergeSort([1, 3, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  });
});
