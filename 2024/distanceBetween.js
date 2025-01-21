import { open } from 'node:fs/promises';

const file = await open('./input.txt');

let colOneArray = [];
let colTwoArray = [];

for await (const line of file.readLines()) {
  let lineArray = line.split('  ')
  colOneArray.push(parseInt(lineArray[0]))
  colTwoArray.push(parseInt(lineArray[1]))
}
console.log(colOneArray.length === colTwoArray.length)

// each array has their corresponding numbers
// remove the min num from each array and subtract - convert difference to absolute value and aggregate in one array
// aggregated array should be summed and that should be the answer for the first day's challenge
