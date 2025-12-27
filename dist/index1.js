"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fizzBuzz(n) {
    let answer = []; // Initialize an array to store results
    for (let i = 1; i <= n; i++) {
        // Check for the most specific condition first: divisibility by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        }
        // Next, check for divisibility by 3
        else if (i % 3 === 0) {
            answer.push("Fizz");
        }
        // Next, check for divisibility by 5
        else if (i % 5 === 0) {
            answer.push("Buzz");
        }
        // If none of the above, add the number as a string
        else {
            answer.push(i.toString());
        }
    }
    return answer; // Return the final array of results
}
// Example usage:
const result = fizzBuzz(20);
console.log(result.join(', '));
// Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz
//# sourceMappingURL=index1.js.map