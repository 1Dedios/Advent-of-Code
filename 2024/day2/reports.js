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
  cleanReports.push(report.split(' '));
}

// clean report array should now be a 2D array
console.log(cleanReports);

/**
 *
 * WHAT IS A SAFE REPORT?
 *
 * - all levels are increasing or decreasing
 * - any 2 adjacent levels differ by at least one or at most three
 */
// extract the number of reports that are considered "safe" and return that number that's the answer to part 1
// each col of a report represents a level
// iterate through clean reports levels w/ a fixed window size of 2 from the current element if it qualifies for safe report increase safeReport VAR #

for (const reportCell of cleanReports) {
  // going through each report and below iterating through each level/element
  for (let i = 0; i < reportCell.length; i++) {
    // compare the first level to the next level if there is a difference bigger than 3 then continue - DISQUALIFIED
    if (
      Math.abs(parseInt(reportCell[i], 10) - parseInt(reportCell[i++], 10)) > 3
    ) {
      continue;
    } else {
      let increasing = false;
      let decreasing = false;

      reportCell[i] > reportCell[i++]
        ? (decreasing = true)
        : (increasing = true);

      // depending on the flag set then the report levels ALL should be following the flag if it deviates then report UNSAFE (move to next)
      // now we can start going through the levels with a fixed window size of 2
      // if the levels in this new window don't differ by a difference > 3 - and also adhere to the flag - still safe
    }
  }
}
