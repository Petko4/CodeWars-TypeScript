const oddOrEvenTest = require("./oddOrEven");

test("Odd or Even?", () => {
  expect(oddOrEvenTest([0])).toMatch("even");
  expect(oddOrEvenTest([1])).toMatch("odd");
  expect(oddOrEvenTest([])).toMatch("even");
  expect(oddOrEvenTest([0, 1, 5])).toMatch("even");
  expect(oddOrEvenTest([0, 1, 3])).toMatch("even");
  expect(oddOrEvenTest([1023, 1, 2])).toMatch("even");
  expect(oddOrEvenTest([0, -1, -5])).toMatch("even");
  expect(oddOrEvenTest([0, -1, -3])).toMatch("even");
  expect(oddOrEvenTest([-1023, 1, -2])).toMatch("even");
  expect(oddOrEvenTest([0, 1, 2])).toMatch("odd");
  expect(oddOrEvenTest([0, 1, 4])).toMatch("odd");
  expect(oddOrEvenTest([1023, 1, 3])).toMatch("odd");
  expect(oddOrEvenTest([0, -1, 2])).toMatch("odd");
  expect(oddOrEvenTest([0, 1, -4])).toMatch("odd");
  expect(oddOrEvenTest([-1023, -1, 3])).toMatch("odd");
});
