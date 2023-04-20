import { reverseWords } from "./reverseWords";

test("Reversed Words", () => {
  expect(reverseWords("hello world!")).toMatch(/world! hello/);
  expect(reverseWords("yoda doesn't speak like this")).toMatch(
    /this like speak doesn't yoda/
  );
  expect(reverseWords("foobar")).toMatch(/foobar/);
  expect(reverseWords("kata editor")).toMatch(/editor kata/);
  expect(reverseWords("row row row your boat")).toMatch(
    /boat your row row row/
  );
});
