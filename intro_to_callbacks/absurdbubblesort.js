const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function absurdBubbleSort(arr, sortCompletionCallback){
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps == true){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr);
    }
  }

}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreater) => {
      if (isGreater) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  } else if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, (answer) => {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});