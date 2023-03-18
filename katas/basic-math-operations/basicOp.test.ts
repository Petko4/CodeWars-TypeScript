const basicOpTest = require("./basicOp");

test("Basic Mathematical Operations", () => {
  expect(basicOpTest("+", 4, 7)).toBe(11);
  expect(basicOpTest("-", 15, 18)).toBe(-3);
  expect(basicOpTest("*", 5, 5)).toBe(25);
  expect(basicOpTest("/", 49, 7)).toBe(7);
  expect(() => basicOpTest("/", 49, 0)).toThrowError("Cannot divide by 0");
  expect(() => basicOpTest("d", 49, 0)).toThrowError("Invalid operation!");
});
