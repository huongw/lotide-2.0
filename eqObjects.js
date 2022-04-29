const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  
  return `✅ Assertion Passed ${actual} === ${expected}`;
};

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

const eqObjects = function(obj1, obj2) {
  const firstObjSize = Object.keys(obj1).length;
  const secondObjSize = Object.keys(obj2).length;

  if (firstObjSize !== secondObjSize) {
    return false;
  }

  let isTrue = true

  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      isTrue = eqArrays(obj1[key], obj2[key])
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
    
  }

  return isTrue;
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3"};
// console.log(eqObjects(ab, abc)); // => false

const result = { a: "1", b: "2", c: [3,2,1]};
const result2 = { a: "1", b: "2", c: [1,2,34]};
const result3 = { a: "1", b: "2", c: [1,2,3]};
console.log(eqObjects(result, result2)); // => false

console.log(assertEqual(eqObjects(result, result2), false)); // => false
console.log(assertEqual(eqObjects(result2, result3), false)); // => false

// const cde = { a: "4", b: "8", c: "3"};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cde, cd)); // => false
// console.log(eqArrays(eqObjects(cd, dc), true)); // => true
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3] };
// console.log(assertEqual(eqObjects(cd, cd2), true)); // => false
// console.log(eqObjects(cd, cd2))