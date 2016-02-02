/**
 * Given a single input string, write a function that produces all possible permutations
 * of a string and outputs them as an array.
 */

/**
 * example usage:
 * var permutations = allPermutations('ab');
 * console.log(permutations); // ['aa', 'ab', 'ba', 'bb']
 */

export function allPermutations(str) {
  var results = [];

  function doPermutations(soFar) {
    if (soFar.length === str.length) {
      results.push(soFar);

      return;
    }

    for (let i = 0; i < str.length; i++) {
      doPermutations(soFar + str[i]);
    }
  }

  doPermutations('');

  return results;
}
