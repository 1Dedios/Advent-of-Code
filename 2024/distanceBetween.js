import { readFile } from 'fs';

readFile('./input1.txt', 'utf8', (error, text) => {
  if (error) throw error;
  const firstLine = text.split('/n');
  // replace(pattern, replacement)
  console.log(firstLine);
});
