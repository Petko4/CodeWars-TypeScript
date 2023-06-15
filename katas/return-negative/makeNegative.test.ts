import { makeNegative } from "./makeNegative";

test("Return Negative", () => {
  expect(makeNegative(1)).toBe(-1);
  expect(makeNegative(-5)).toBe(-5);
  expect(makeNegative(0)).toBe(0);
  expect(makeNegative(42)).toBe(-42);
});
