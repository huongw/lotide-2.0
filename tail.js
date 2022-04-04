const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
    
  return `✅ Assertion Passed ${actual} === ${expected}`;
};

const tail = function(arr) {
  const newArr = [];

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));

const oneWord = ["Hello"];
console.log(tail(oneWord));
console.log(assertEqual(oneWord.length, 1));

const noWord = [];
console.log(tail(noWord));
console.log(assertEqual(noWord.length, 0));
