import { open } from 'node:fs/promises';

const logsFile = await open('./logs.txt');
let reportAggregator = [];
let cleanReports = [];
let safeReports = 0;

for await (const report of logsFile.readLines()) {
  reportAggregator.push(report);
}

for (const report of reportAggregator) {
  cleanReports.push(report.split(' '));
}

/**
 *
 * WHAT IS A SAFE REPORT?
 *
 * - all levels are increasing or decreasing
 * - any 2 adjacent levels 1 >= DIFF <= 3
 */

for (const reportCell of cleanReports) {
  if (
    Math.abs(parseInt(reportCell[0], 10) - parseInt(reportCell[1], 10)) > 3 ||
    Math.abs(parseInt(reportCell[0], 10) - parseInt(reportCell[1], 10)) === 0
  ) {
    continue;
  } else {
    // STATUS: WE ARE SUCCESSFULLY FILTERING REPORTS WITH A DIFF < 3 and with at least a DIFF of at least 1
    let increasing = false;
    let decreasing = false;
    let safeFlag;

    parseInt(reportCell[0], 10) > parseInt(reportCell[1], 10)
      ? (decreasing = true)
      : (increasing = true);

    // STATUS: WE HAVE ESTABLISHED IF THE LEVELS ARE INCREASING OR DECREASING
    console.log('true or false outcome: ', increasing === true ? true : false);

    if (increasing === true) {
      for (let i = 2; i < reportCell.length; i++) {
        console.log(
          "WE'RE GOING TO CHECK THIS INCREASING REPORT MORE THOROUGHLY: ",
          reportCell
        );
        console.log(
          'WINDOW AFTER INITIAL CONDITION (INCREASING): ',
          parseInt(reportCell[i], 10),
          parseInt(reportCell[++i], 10)
        );
        console.log(
          'first condition (diff <= 3): ',
          Math.abs(
            parseInt(reportCell[i], 10) - parseInt(reportCell[++i], 10)
          ) <= 3
        );
        console.log(
          'second condition (diff >= 1): ',
          Math.abs(
            parseInt(reportCell[i], 10) - parseInt(reportCell[++i], 10)
          ) >= 1
        );
        console.log(
          'third condition (curr < next): ',
          parseInt(reportCell[i], 10) < parseInt(reportCell[++i], 10)
        );

        // STATUS: IMPLEMENTING CONDITIONALS FOR THE safeFlag - INCREASING LEVELS
      }
      // IF SAFEFLAG === TRUE - ADD 1 TO SAFEREPORTS
    } else {
      for (let i = 2; i < reportCell.length; i++) {
        console.log(
          "WE'RE GOING TO CHECK THIS DECREASING REPORT MORE THOROUGHLY: ",
          reportCell
        );
        console.log(
          'WINDOW AFTER INITIAL CONDITION (DECREASING): ',
          parseInt(reportCell[i], 10),
          parseInt(reportCell[++i], 10)
        );
        console.log(
          'first condition (diff <= 3): ',
          Math.abs(
            parseInt(reportCell[i], 10) - parseInt(reportCell[++i], 10)
          ) <= 3
        );
        console.log(
          'second condition (diff >= 1): ',
          Math.abs(
            parseInt(reportCell[i], 10) - parseInt(reportCell[++i], 10)
          ) >= 1
        );
        console.log(
          'third condition (curr > next): ',
          parseInt(reportCell[i], 10) < parseInt(reportCell[++i], 10)
        );

        // STATUS: IMPLEMENTING CONDITIONALS FOR THE safeFlag - DECREASING LEVELS
      }

      // IF SAFEFLAG === TRUE - ADD 1 TO SAFEREPORTS
    }
  }
}

// console.log("# of Safe Reports = ", safeReports)
// 500 - attempt for next
