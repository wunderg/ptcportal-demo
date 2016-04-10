export const contains =
`function contains(collection, target){
  //your code here
}`;

export const containsSolution =
`function contains(collection, target) {
  return reduce(collection, function(result, item) {
    if (item === target) {
      result = true;
    }
  }, false);
}

***** Pseudo Code *****
//function contains accepts collection and predicate
  // return reduce and pass in collection, accumulator and true
  // accumulator will accept 2 args result and item
    //check if predicate with item is not true
      //set result to false;
  //return result
`;

export const containsExample =
`//test array
var numbers = [2,4,5,6];

contains(numbers, 4); => true;
`;
