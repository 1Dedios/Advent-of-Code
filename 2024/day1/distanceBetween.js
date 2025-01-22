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

/** 
 * 
 * PART 2
 * 
 */

// need to create key, val pairs - key=colOneArrayCopy elements, val=how often it appears in colTwoArrayCopy

// iterate colOneArrayCopy and make element the key and 0 as val

// iterate colTwoArrayCopy - if element a key in the object - if val > 0 increase val by one else change val to 1

// create arrays from keys and values

// create similarity array - empty 

// iterate through keys - take keys and multiply by val array element and push resulting value to similarity array

// reduce function on similarity array should be the answer