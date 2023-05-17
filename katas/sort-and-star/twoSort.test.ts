import { twoSort } from "./twoSort";

test("Sort and Star", () => {
  expect(
    twoSort([
      "bitcoin",
      "take",
      "over",
      "the",
      "world",
      "maybe",
      "who",
      "knows",
      "perhaps",
    ])
  ).toMatch("b***i***t***c***o***i***n");
  expect(
    twoSort([
      "turns",
      "out",
      "random",
      "test",
      "cases",
      "are",
      "easier",
      "than",
      "writing",
      "out",
      "basic",
      "ones",
    ])
  ).toMatch("a***r***e");
  expect(
    twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"])
  ).toMatch("a***b***o***u***t");
  expect(
    twoSort([
      "i",
      "want",
      "to",
      "travel",
      "the",
      "world",
      "writing",
      "code",
      "one",
      "day",
    ])
  ).toMatch("c***o***d***e");
  expect(
    twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"])
  ).toMatch("L***e***t***s");
});
