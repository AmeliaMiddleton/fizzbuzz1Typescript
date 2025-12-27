"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fizzBuzzStringConcat(n) {
    for (let i = 1; i <= n; i++) {
        let output = ''; // Start with an empty string
        if (i % 3 === 0) {
            output += 'Fizz'; // Append "Fizz" if divisible by 3
        }
        if (i % 5 === 0) {
            output += 'Buzz'; // Append "Buzz" if divisible by 5
        }
        // Log "output" if it has content, otherwise log the number
        console.log(output || i);
    }
}
// Example usage:
fizzBuzzStringConcat(20);
//# sourceMappingURL=index.js.map