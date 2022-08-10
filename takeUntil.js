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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const takeUntil = function(array, callback) {
  const newArr = [];

  for (const item of array) {
    if (callback(item)) {
      return newArr;
    }

    if (!callback(item)) {
      newArr.push(item)
    }
  }
}

const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]))
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]))