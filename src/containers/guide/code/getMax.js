export const getMax =
`function getMax(collection) {
  // code here
}
`;

export const getMaxExample =
`var numbers = [3,6,9,8,6,3,9];;

getMax(numbers) => 9;
`;

export const getMaxSolution =
`function getMax(collection) {
  return reduce(collection, function(memo, item) {
    if (item > memo) {
      memo = item;
    }
    return memo;
  });
}
`;
