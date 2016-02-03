export function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }

  const middle = Math.floor(items.length / 2);
  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));

  // In Place
  //params = merge(mergeSort(left), mergeSort(right));
  //params.unshift(0, items.length);
  //items.splice.apply(items, params);
  //return items;
}

function merge(left, right) {
  const results = [];

  let li = 0;
  let ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      results.push(left[li]);
      li += 1;
    } else {
      results.push(right[ri]);
      ri += 1;
    }
  }

  return results
    .concat(left.slice(li))
    .concat(right.slice(ri));
}

