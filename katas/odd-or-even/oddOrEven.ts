/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

type OddOrEven = "odd" | "even";

function oddOrEven(array: number[]): OddOrEven {
  if (array.length === 0) {
    return "even";
  }

  const sum = array.reduce((sum, curr) => (sum += curr), 0);

  if (sum % 2 === 0) {
    return "even";
  }

  return "odd";
}

module.exports = oddOrEven;
