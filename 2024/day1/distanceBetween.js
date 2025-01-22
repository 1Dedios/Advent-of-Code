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

console.log('PART 1: ANSWER - ', aggregateArray.reduce((acc, val) => acc + val, 0))

/** 
 * 
 * PART 2
 * 
 */

let colOneArrayCopy1 = [...colOneArray]
let colTwoArrayCopy1 = [...colTwoArray]
let freqObj = {}

for (let i = 0; i < colOneArrayCopy1.length; i++) {
  freqObj[colOneArrayCopy1[i]] = 0
}

for (let i = 0; i < colTwoArrayCopy1.length; i++) {
  if (freqObj.hasOwnProperty(colTwoArrayCopy1[i])) {
    if (freqObj[colTwoArrayCopy1[i]] > 0) {
      freqObj[colTwoArrayCopy1[i]] += 1
    } else {
      freqObj[colTwoArrayCopy1[i]] = 1
    }
  }
}

for (const key in freqObj) {
  if (freqObj[key] == 0) {
    delete freqObj[key]
  }
}

let similarityScores = [];

for (const key in freqObj) {
  similarityScores.push(parseInt(key) * freqObj[key])
}

console.log('PART 2: ANSWER - ', similarityScores.reduce((acc, val) => acc + val, 0))