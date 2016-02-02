// coinChange

export function coinChange(price, coins) {
  var results = [];

  function doCoinChange(index, coinsUsed, sum) {
    if (sum > price) {
      return;
    }

    if (sum === price) {
      results.push(coinsUsed);

      return;
    }

    for (let i = index; i < coins.length; i++) {
      doCoinChange(i, coinsUsed.concat(coins[i]), sum + coins[i]);
    }
  }

  doCoinChange(0, [], 0);

  return results;
}
