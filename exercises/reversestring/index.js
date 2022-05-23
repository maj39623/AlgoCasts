// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

//Solution 1
//turn str into an array
//call reverse method on the array
//join the array back into a string
//return the result

// function reverse(str) {
//     const arr = str.split("");
//     arr.reverse();
//     return arr.join("");
//   }

//Solution 2
//create an empty string called reversed
//for each character in the provided string take the character and add it to the start of reversed
//return the variable reversed

// function reverse(str) {
//     let reversed = "";
//     for (let character of str) {
//       reversed = character + reversed;
//     }
//     return reversed;
//   }

//Solution 3
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, "");
//   }
