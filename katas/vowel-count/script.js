/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.getCount = function (str) {
        return str.split("").reduce(function (sum, char) {
            if (char === "a" ||
                char === "e" ||
                char === "i" ||
                char === "o" ||
                char === "u") {
                sum += 1;
            }
            return sum;
        }, 0);
    };
    return Kata;
}());
console.log(Kata.getCount("abracadabra")); // 5
