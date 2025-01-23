import { open } from 'node:fs/promises'

const logsFile = await open('./logs.txt')
let reportAggregator = []
let cleanReports = []
let safeReports = 0;

for await (const report of logsFile.readLines()) {
    // report returns strings
    console.log(report)

    //reportAggregator.push(report)

}
// REFACTOR TIP - can always take the functions and place in their own file and module.export the functions to use here

const reportCleaner = (reports) => {
    // iterate through reports
    // each report should be split by space 
    // push the clean reports to clean report array as an array

}

// clean report array should now be a 2D array 

/**
 * 
 * SAFE REPORT
 * 
 * - all levels are increasing or decreasing 
 * - any 2 adjacent levels differ by at least one or at most three
 */

// extract the number of reports that are considered "safe" and return that number that's the answer to part 1


// each col of a report represents a level
// iterate through clean reports levels w/ a fixed window size of 2 from the current element if it qualifies for safe report increase safeReport #

