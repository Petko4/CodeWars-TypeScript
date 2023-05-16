import { inArray } from "./inArray";

test("Which are in?", () => {
  const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

  expect(inArray(["arp", "live", "strong"], a2)).toEqual([
    "arp",
    "live",
    "strong",
  ]);
  expect(inArray(["xyz", "live", "strong"], a2)).toEqual(["live", "strong"]);
  expect(inArray(["live", "strong", "arp"], a2)).toEqual([
    "arp",
    "live",
    "strong",
  ]);
  expect(inArray(["live", "strong", "lyal", "lysh", "arp"], a2)).toEqual([
    "arp",
    "live",
    "strong",
  ]);
  expect(inArray(["tarp", "mice", "bull"], a2)).toEqual([]);
  expect(inArray([], a2)).toEqual([]);
});
