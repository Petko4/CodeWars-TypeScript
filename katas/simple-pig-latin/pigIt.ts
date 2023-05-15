/*
 * Move the first letter of each word to the end of it,
 * then add "ay" to the end of the word.
 * Leave punctuation marks untouched.
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */
const PUNCTUATION_MARKS = [".", "!", "?", ";"];

export const pigIt = (a: string): string => {
  const words = a.split(" ");
  const piggedWords = words.map((word) => {
    if (PUNCTUATION_MARKS.includes(word)) {
      return word;
    }
    return word.slice(1) + word[0] + "ay";
  });

  return piggedWords.join(" ");
};
