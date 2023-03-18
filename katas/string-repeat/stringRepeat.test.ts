const stringRepeatTest = require("./stringRepeat");

test("String repeat", () => {
  expect(stringRepeatTest(3, "*")).toMatch("***");
});
