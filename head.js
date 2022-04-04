const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
    
  return `✅ Assertion Passed ${actual} === ${expected}`;
};

const head = function(arr) {
  if (arr.length <= 0) {
    return undefined;
  }

  return arr[0];
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), undefined));
console.log(assertEqual(head([1]), 1));
