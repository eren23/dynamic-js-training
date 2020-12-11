const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numFortheRest = countConstruct(
        target.slice(word.length),
        wordBank,
        memo
      );
      totalCount += numFortheRest;
    }
  }

  memo[target] = totalCount;
  return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "sk", "ska", "boar"])
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "eeeeeee",
    "eeeeeeeeeeeee",
    "eeeeeeeeee",
    "eeeeeeee",
    "ef",
    "eee",
    "eeee",
    "eeeee",
  ])
);
