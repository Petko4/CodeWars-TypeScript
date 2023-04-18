import { getMiddle } from "./getMiddle";

test("Get the Middle Character", () => {
  expect(getMiddle("test")).toMatch(/es/);
  expect(getMiddle("testing")).toMatch(/t/);
});
