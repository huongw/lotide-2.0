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
    console.log(`✅ Assertion Passed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual([1,2,4,2], [1,2,4,2]) // True
assertArraysEqual([1,2,"4",2], [1,2,4,2]) // False
assertArraysEqual([1,1,4,0], [1,1,4,0]) // True
assertArraysEqual(["Hello",2,4,2], [1,3,6,1]) // False