export const reduce = `function reduce(collection, accumulator, startValue) {
  //your code here
}`

export const reduceSolution =
`function reduce(collection, accumulator, startValue) {
  each(collection, function(item) {
    if (startValue === undefined) {
      startValue = collection[0];
    }
    else {
      startValue = accumulator(startValue, item);
    }
  });

  return startValue;
}
***** Pseudo Code *****
// declare function reduce that accept collection, accumulator & start

  // use each to iterate over collection
  // and pass anonymous funcion as callback
     // if start is not defined
        // then start will be first item in the collection
     // else
        // start will be the result of accumulator with start and item

//return start
`

export const reduceExample =
`//test array
var numbers = [1,2,3,4];

//test function
function sum(memo, item) {
  return memo + item;
}

reduce(numbers, double); => 10;
`
