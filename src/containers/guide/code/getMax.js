export const getMax =
`
function getMax(collection) {
  return reduce(collection, function(memo, item) {
    if (item > memo) {
      memo = item;
    }
    return memo;
  });
}
`;
