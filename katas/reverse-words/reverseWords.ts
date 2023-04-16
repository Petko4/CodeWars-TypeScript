/*
Complete the function that accepts a string parameter, and reverses each word 
in the string. All spaces in the string should be retained.

Examples:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps
*/

export function reverseWords(str: string): string {
  // 1. split string into array of words
  // 2. iterate through each word
  //    a. transform each word into array of characters
  //    b. reverse character order
  //    c. join characters into word string
  // 3. join reversed words into one string and return it
  const words = str.split(" ");
  return words.map((word) => [...word].reverse().join("")).join(" ");
}
