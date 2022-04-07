const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const isTrue = eqArrays(arr1, arr2);

  if (isTrue) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
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