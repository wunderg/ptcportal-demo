export const filter = `function filter(collection, predicate){
  //your code here
}`;

export const filterSolution = `function filter(collection, callback) {
  var result = [];
  each(collection, function(item) {
    if (predicate(item)) {
      result.push(item);
    }
  });
  return result;
}

***** Pseudo Code *****
//declare function filter that accepts collection and test function
  //create new array to store results

  //use each to iterate over the collection
    //and pass anonymous function as callback

     //if test with current will be truthy
       // push item into the result

// return result;
`;

export const filterExample = `var numbers = [1,2,3,4,5,6];
function isEven(num) {
  return num % 2 === 0;
}

filter(numbers, isEven); => [2, 4, 6];
`;

export const filterUsingReduce =
`function filter(collection, predicate) {
  return reduce(collection, function(result, item) {
    if(predicate(item)) {
      result.push(item);
    }
    return result;
  }, [])
}
`;
