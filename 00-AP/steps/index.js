// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  Array(n).fill(1).map((c, i) => { console.log(  "#".repeat(i + 1) + " ".repeat(n - (i + 1))  ) })
}

// console.log(steps(3));

module.exports = steps;



  // Array(n).fill(1).map((c, i) => { return "#".repeat(i + 1) + " ".repeat(n - (i + 1)) }).map((x) => { console.log(x) })