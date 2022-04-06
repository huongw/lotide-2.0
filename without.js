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

const without = function(source, itemsToRemove) {
  let output = [];

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove[i] !== source[i]) {
      output.push(source[i]);
    }
  }

  return output;
};

console.log(without([1, 2, 3], [1, 2])); // => [3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["crispy creme", "timbits", "veggies"], ["veggies"])); // => ["crispy creme", "timbits"]
console.log(without(["dogs", "cats", "sharks"], ["dolphins", "hamsters", "sharks"])); // => ["dogs", "cats"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
