import { open } from 'node:fs/promises';

const file = await open('./input.txt');

let colOneArray = [];
let colTwoArray = [];

for await (const line of file.readLines()) {
  let lineArray = line.split('  ')
  colOneArray.push(parseInt(lineArray[0]))
  colTwoArray.push(parseInt(lineArray[1]))
}

let colOneArrayCopy = [...colOneArray]
let colTwoArrayCopy = [...colTwoArray]
let aggregateArray = [];

let lenOfArrays = colOneArrayCopy.length

while (lenOfArrays > 0) {
  let colOneMin = Math.min(...colOneArrayCopy)
  let colTwoMin = Math.min(...colTwoArrayCopy)
  let indexOfColOneMin = colOneArrayCopy.indexOf(colOneMin);
  let indexOfColTwoMin = colTwoArrayCopy.indexOf(colTwoMin)
  
  colOneArrayCopy.splice(indexOfColOneMin, 1);
  colTwoArrayCopy.splice(indexOfColTwoMin, 1);

  let distance = Math.abs(colOneMin - colTwoMin)
  aggregateArray.push(distance)
  lenOfArrays -= 1
}

console.log(aggregateArray.reduce((acc, val) => acc + val, 0))