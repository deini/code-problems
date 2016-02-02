import { allAnagrams } from './allAnagrams';

describe('allAnagrams:', () => {
  it('should return all the anagrams', () => {
    const results = [
      'abc',
      'acb',
      'bac',
      'bca',
      'cab',
      'cba'
    ];

    expect(allAnagrams('abc')).toEqual(results);
  });
});
