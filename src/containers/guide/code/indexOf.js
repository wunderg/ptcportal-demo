export const indexOf =
`function indexOf(collection, target){
  //your code here
}`;

export const eachModifiedIndex =
`function indexOf(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length ; i++) {
      callback(collection[i], I, collection);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}
`;

export const reduceModifiedIndex =
`function reduce(collection, accumulator, startValue) {
  each(collection, function(item, KEY) {
    if (startValue === undefined) {
      startValue = collection[0];
    }
    else {
      startValue = accumulator(startValue, item, KEY);
    }
  });

  return startValue;
}
`;

export const indexOfSolution =
`function indexOf(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length ; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

***** Pseudo Code *****
// declare function indexOf
  // check if collection is array
    // iterate over array
      // apply callback on every item in the array
  // else if collection is not an array
    // iterate over object
      // apply callback to every value in the object
`

export const indexOfExample =
`//test array
var numbers = [1,2,3,4,5,6];

//test function
function log(num) {
  console.log(num);
}

indexOf(numbers, log); => log every value to the console;
`
