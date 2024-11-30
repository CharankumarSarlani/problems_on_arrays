function getMinimumJumpsToEnd(array) {
  let jumps = 0;
  let index = 0;

  while (index < array.length - 1) {
    jumps++;
    index = index + array[index];
    
    index = index > array.length - 1 ? array.length - 1: index;
  }

  return jumps;
}

// ------------------test fragment starts from here------------------------
function getIndicator(result, expected) {
  return result === expected ? "✅" : "❌";
}

function testMinimumJumpsToEnd(array, expected) {
  const result = getMinimumJumpsToEnd(array);
  const status = getIndicator(result, expected);

  console.log("input: ", array);
  console.log(status, "expected: ", expected, "result: ", result);
  console.log();
}

function testCases() {
  testMinimumJumpsToEnd([1], 0);
  testMinimumJumpsToEnd([1, 2, 3], 2);
  // testMinimumJumpsToEnd([0, 0, 0, 0], 6); no movement
  testMinimumJumpsToEnd([1, 1, 1, 1, 1, 1], 5);
  testMinimumJumpsToEnd([2, 1, 4, 5, 6, 8, 7, 9], 3);
  testMinimumJumpsToEnd([1, 4, 1, 2, 3], 2);
}

testCases();

