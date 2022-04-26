const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  
  return `✅ Assertion Passed ${actual} === ${expected}`;
};

function countLetters(str) {
  const countObj = {};

  for (const letter of str) {
    if (letter === " ") continue;

    if (countObj[letter]) {
      countObj[letter] += 1;
    } else {
      countObj[letter] = 1;
    }
  }

  return countObj;
}

console.log(countLetters("lighthouse in the house"));