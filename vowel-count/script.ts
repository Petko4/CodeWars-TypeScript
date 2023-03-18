/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

class Kata {
  static getCount(str: string): number {
    return str.split("").reduce((sum: number, char: string): number => {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        sum += 1;
      }
      return sum;
    }, 0);
  }
}

console.log(Kata.getCount("abracadabra")); // 5
