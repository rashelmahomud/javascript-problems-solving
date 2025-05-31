console.log("problems");

// Question ======================== problems 01

// Flatten a Nested Array

function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
