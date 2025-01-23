import { open } from 'node:fs/promises'

const logsFile = await open('./logs.txt')

for await (const report of logsFile.readLines()) {
    // report returns strings
    console.log(report)
}