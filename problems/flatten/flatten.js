export function flatten(input) {
  const arr = [];

  if (Array.isArray(input)) {
    innerFlatten(input);
  }

  function innerFlatten(arrToFlat) {
    arrToFlat.forEach(function(item) {
      if (Array.isArray(item)) {
        innerFlatten(item);
      } else {
        arr.push(item);
      }
    });
  }

  return arr;
}
