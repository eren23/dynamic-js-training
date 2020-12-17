const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};

console.log(canSum(7, [2, 5, 7, 3, 4]));
console.log(canSum(7, [2, 5]));
console.log(canSum(7, [2, 4]));

console.log(canSum(300, [7, 14]));
