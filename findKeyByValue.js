const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  
  return `✅ Assertion Passed ${actual} === ${expected}`;
};

function findKeyByValue(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const result = assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
const result2 = assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
const result3 = assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
const result4 = assertEqual(findKeyByValue(bestTVShowsByGenre, "Good Luck Charlie"), undefined);
const result5 = assertEqual(findKeyByValue(bestTVShowsByGenre, "Attack On Titan"), undefined);

console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)