const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  
  return `✅ Assertion Passed ${actual} === ${expected}`;
};

const findKey = function(hotelData, callback) {
  for (const hotel in hotelData) {
    if (callback(hotelData[hotel])) {
      return hotel;
    }
  }
};

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const results2 = findKey({
  "Blue Hill": { stars: 12 },
  "Akaleri":   { stars: 33 },
  "noma":      { stars: 21 },
  "elBulli":   { stars: 32 },
  "Ora":       { stars: 20 },
  "Akelarre":  { stars: 38 }
}, x => x.stars < 30) // => "Blue Hill"

const results3 = findKey({
  "Sarah": { age: 12 },
  "Tammy": { age: 33 },
  "Sally": { age: 21 },
  "Jake":  { age: 32 },
  "Rita Ora": { age: 20 },
  "Alex":  { age: 38 }
}, x => x.age >= 30) // => "Tammy"

console.log(assertEqual(results, "noma"))
console.log(assertEqual(results2, "Blue Hill"))
console.log(assertEqual(results3, "Tammy"))

