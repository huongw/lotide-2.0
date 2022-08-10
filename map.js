const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  const isTrue = eqArrays(actual, expected);

  if (isTrue) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const words = ["Hardy Boys", "Elephant in the room", "Love is blind", "Lion in the den", "Octopus on my head"];

const map = (words, callback) => {
  const results = [];

  for (const word of words) {
    results.push(callback(word));
  }

  return results;
};

const results1 = assertArraysEqual(map(words, word => word[0]), ["H","E","L","L","O"]);
const results2 = assertArraysEqual(map(words, word => word[0].toLowerCase()), ["h","e","l","l","o"]);
const results3 = assertArraysEqual(map(words, word => word.length), [10,20,13,15,18]);
console.log(results1);
console.log(results2);
console.log(results3);
