export const sum =
`
function sum(collection, startValue) {
  startValue = startValue || 0;
  return reduce(collection, function(memo, item) {
    memo + item;
    return memo;
  }, startValue);
}
`;
