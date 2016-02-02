/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array.
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

export function allAnagrams(str) {
  const results = [];

  function doAllAnagrams(remaining, soFar) {
    if (remaining.length === 0) {
      results.push(soFar);
    }

    for (let i = 0; i < remaining.length; i++) {
      doAllAnagrams(remaining.substring(0, i) + remaining.substring(i + 1), soFar + remaining[i]);
    }
  }

  doAllAnagrams(str, '');

  return results;
}
