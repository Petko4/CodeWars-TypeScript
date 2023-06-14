import { solution } from "./solution";

test("String ends with?", () => {
  expect(solution("abcde", "cde")).toBeTruthy();
  expect(solution("abcde", "abc")).toBeFalsy();
  expect(solution("abc", "")).toBeTruthy();
});
