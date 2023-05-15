import { pigIt } from "./pigIt";

test("Simple Pig Latin", () => {
  expect(pigIt("Pig latin is cool")).toMatch(/igPay atinlay siay oolcay/);
  expect(pigIt("This is my string")).toMatch(/hisTay siay ymay tringsay/);
  expect(pigIt("Hello world !")).toMatch(/elloHay orldway !/);
});
