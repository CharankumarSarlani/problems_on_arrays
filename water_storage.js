function getMaxInRange(array, start, end) {
  let max = array[start];

  for (let index = start; index <= end; index++) {
    if (max < array[index]) {
      max = array[index]
    }
  }

  return max;
}

function waterStorage(array) {
  let unitsOfWater = 0;

  for (let index = 0; index < array.length - 2; index++) {
    let leftMaximum = getMaxInRange(array, 0, index + 1);
    leftMaximum = leftMaximum - array[index + 1]

    let rightMaximum = getMaxInRange(array, index + 1, array.length - 1);
    rightMaximum = rightMaximum - array[index + 1];

    unitsOfWater += Math.min(leftMaximum, rightMaximum);
  }

  return unitsOfWater;
}

// ------------------test fragment starts from here------------------------
function getIndicator(result, expected) {
  return result === expected ? "✅" : "❌";
}

function testMinimumJumpsToEnd(array, expected) {
  const result = waterStorage(array);
  const status = getIndicator(result, expected);

  console.log("input: ", array);
  console.log(status, "expected: ", expected, "result: ", result);
  console.log();
}

function testCases() {
  testMinimumJumpsToEnd([3, 4], 0);
  testMinimumJumpsToEnd([3, 0, 4], 3);
  testMinimumJumpsToEnd([3, 0, 0, 4], 6);
  testMinimumJumpsToEnd([3, 0, 1, 0, 4, 0, 2], 10);
  testMinimumJumpsToEnd([3, 0, 2, 0, 4], 7);
  testMinimumJumpsToEnd([1, 2, 3, 4], 0);
  testMinimumJumpsToEnd([2, 1, 5, 3, 1, 0, 4], 9);
}

testCases();

