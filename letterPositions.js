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

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    
    if (letter === " ") continue;

    if (!results[letter]) {
      results[letter] = [i]
    } else {
      results[letter].push(i)
    }
  }
  
  return results;
};

console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]));