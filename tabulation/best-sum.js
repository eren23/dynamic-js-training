const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const comb = [...table[i], num];
        if (!table[i + num] || table[i + num].length > comb.length) {
          table[i + num] = comb;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 3, 5]));
console.log(bestSum(7, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
