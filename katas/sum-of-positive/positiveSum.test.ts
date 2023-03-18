const positiveSumTest = require("./positiveSum");

test("Sum of positive", () => {
  expect(positiveSumTest([1, 2, 3, 4, 5])).toBe(15);
  expect(positiveSumTest([1, -2, 3, 4, 5])).toBe(13);
  expect(positiveSumTest([])).toBe(0);
  expect(positiveSumTest([-1, -2, -3, -4, -5])).toBe(0);
  expect(positiveSumTest([-1, 2, 3, 4, -5])).toBe(9);
});
