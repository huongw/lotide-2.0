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

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  
  const isEven = arr.length % 2 === 0;
  const middle = arr[Math.floor((arr.length - 1) / 2)];

  if (!isEven) {
    return [middle]
  }

  return [middle, middle + 1]
};

console.log("[]", middle([1])) // => []
console.log("[]", middle([1, 2])) // => []
console.log("[2]", middle([1, 2, 3])) // => [2]
console.log("[3]", middle([1, 2, 3, 4, 5])) // => [3]
console.log("[2, 3]", middle([1, 2, 3, 4])) // => [2, 3]
console.log("[3, 4]", middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log("[5]", middle([1, 2, 3, 4, 5, 6, 7, 8, 9])) // => [5]

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]))