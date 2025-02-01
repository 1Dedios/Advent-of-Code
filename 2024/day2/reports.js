import { open } from 'node:fs/promises';

const logsFile = await open('./logs.txt');
let reportAggregator = [];
let cleanReports = [];
let safeReports = 0;

for await (const report of logsFile.readLines()) {
  // report returns strings
  reportAggregator.push(report);
}

for (const report of reportAggregator) {
  // iterate through reports - each report should be split by space
  // push the clean reports to clean report array as an array
  cleanReports.push(report.split(' '));
}
// clean report array should now be a 2D array
console.log(cleanReports);

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

for (const reportCell of cleanReports) {
  // going through the report
  for (let i = 0; i < reportCell.length; i++) {
    // compare the first cell to the next cell if there is a difference bigger than 3 then continue
    if (
      Math.abs(parseInt(reportCell[i], 10) - parseInt(reportCell[i++], 10)) > 3
    ) {
      continue;
    } else {
      // now we can start going through the report with a fixed window size of 2
    }
  }
}
