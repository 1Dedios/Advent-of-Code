import { open } from 'node:fs/promises';

/** 
 * 
 * PART 1
 * 
 */

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
  let distance = Math.abs(colOneMin - colTwoMin)
  
  colOneArrayCopy.splice(indexOfColOneMin, 1);
  colTwoArrayCopy.splice(indexOfColTwoMin, 1);

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
let similarityScores = [];
let freqObj = {}

for (const num of colOneArrayCopy1) {
  freqObj[num] = 0
}

for (const num of colTwoArrayCopy1) {
  if (freqObj.hasOwnProperty(num)) {
    if (freqObj[num] > 0) {
      freqObj[num] += 1
    } else {
      freqObj[num] = 1
    }
  }
}

for (const key in freqObj) {
  if (freqObj[key] == 0) {
    delete freqObj[key]
  } else {
      similarityScores.push(parseInt(key) * freqObj[key])
  }
}

console.log('PART 2: ANSWER - ', similarityScores.reduce((acc, val) => acc + val, 0))