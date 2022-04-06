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


const flatten = function(arr) {
  let flattenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArr = flattenArr.concat(flatten(arr[i]));
    } else {
      flattenArr.push(arr[i]);
    }
  }
  
  return flattenArr;
};

const output = flatten([1, 2, [3, 4], 5, [6, [7,8, [9, 10]]]]); // => [1, 2, 3, 4, 5, 6]

console.log(assertArraysEqual(output, [1,2,3,4,5,6,7,8,9,10]))