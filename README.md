# Unexpected 'i' value in setTimeout
This example demonstrates a common closure-related issue in JavaScript.  The `setTimeout` callback function closes over the variable `i`, but by the time the callback executes, the loop has already completed, resulting in the unexpected output of 5 five times.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unexpected output.

## Solution
The solution involves using `let` inside the loop and creating a new scope.  See `bugSolution.js` for the correction.
