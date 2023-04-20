import { goals } from "./goals";

test("goals test", () => {
  expect(goals(5, 10, 2)).toBe(17);
});
