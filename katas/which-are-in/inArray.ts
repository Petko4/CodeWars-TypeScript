/**
 * Given two arrays of strings a1 and a2 return a sorted array
 * r in lexicographical order of the strings of a1 which are substrings
 * of strings of a2.
 *
 *  Example 1:
 *  a1 = ["arp", "live", "strong"]
 *  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 *  returns ["arp", "live", "strong"]
 *  Example 2:
 *  a1 = ["tarp", "mice", "bull"]
 *  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 *  returns []
 */

export function inArray(a1: string[], a2: string[]): string[] {
  // const r: string[] = [];

  // a1.forEach((s1: string) => {
  //   if (a2.some((s2: string) => s2.includes(s1))) {
  //     r.push(s1);
  //   }
  // });

  // return r.sort();

  return a1.filter((s1) => a2.some((s2) => s2.includes(s1))).sort();
}
