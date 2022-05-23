// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;

//Solution 1: linear solution O(n)

// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//       const a = result[i - 1];
//       const b = result[i - 2];

//       result.push(a + b);
//     }
//     return result[n];
//   }

//Solution 2: Fibanouci exponential time (worse solution)

// function fib(n) {
//     if (n < 2) {
//       return n;
//     }
//     return fib(n - 1) + fib(n - 2);
//   }

//You can improve the runtime of this function with memiozation

// function memoize(fn) {
//     const cache = {};
//     return function (...args) {
//       if (cache[args]) {
//         return cache[args];
//       }
//       const result = fn.apply(this, args);
//       cache[args] = result;

//       return result;
//     };
//   }

//   function fib(n) {
//     if (n < 2) {
//       return n;
//     }
//     return fib(n - 1) + fib(n - 2);
//   }

//   fib = memoize(fib);
