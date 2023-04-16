import { reverseWords } from "./reverseWords";

test("Reverse words", () => {
  expect(reverseWords("The quick brown fox jumps over the lazy dog.")).toMatch(
    /ehT kciuq nworb xof spmuj revo eht yzal .god/
  );
  expect(reverseWords("apple")).toMatch(/elppa/);
  expect(reverseWords("a b c d")).toMatch(/a b c d/);
  expect(reverseWords("double  spaced  words")).toMatch(
    /elbuod  decaps  sdrow/
  );
});
