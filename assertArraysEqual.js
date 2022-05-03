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
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
}

assertArraysEqual([1,2,4,2], [1,2,4,2]) // True
assertArraysEqual([1,2,"4",2], [1,2,4,2]) // False
assertArraysEqual([1,1,4,0], [1,1,4,0]) // True
assertArraysEqual(["Hello",2,4,2], [1,3,6,1]) // False