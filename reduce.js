  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// long-hand, explanatory
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value:", curr,
//     "Total:", acc + curr
//   );
//   return acc + curr;
//   }, 0); // 0 is included as an initial value, to define include the first number in the array as otherwise the function will skip it. Can be any number or element.
// console.log(sum);

// short hand
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <-- this is the desired result
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession; // get profession
  if (!acc[key]) { // if profession doesn't exist in accumulator
    acc[key] = curr.yrsExperience; // add the years experience to current
  } else {
    acc[key] += curr.yrsExperience; // if the profession does already exist, add the years experience onto current value
  }
  return acc;
}, {}); // {} are initial value so that output is in an object format

console.log(experienceByProfession)
