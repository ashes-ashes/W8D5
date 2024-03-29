const readline = require('readline');

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft === 0) {
    completionCallback(sum);
  } else {
    reader.question(`Add another number (${numsLeft} numbers left)`, numParser.bind(addNumbers));
  }

  function numParser(input) {
    num = parseInt(input);
    sum += num;
    console.log(sum);
    addNumbers(sum, numsLeft-1, completionCallback);
  }

} 

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));