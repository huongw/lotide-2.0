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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const isTrue = eqObjects(actual, expected);

  if (isTrue) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const obj1 = {
  "a": 1,
  "b": 2
}

const obj2 = {
  "a": 1,
  "b": 2
}

const obj3 = {
  "a": 2,
  "b": 3
}


console.log(assertObjectsEqual(obj1, obj2))
console.log(assertObjectsEqual(obj1, obj3))