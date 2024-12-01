function isElementFound(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function findMissingElement(array) {
  let missingElement = 0;

  for (let index = 0; index < array.length - 1; index++) {
    const min = Math.min(array[index], array[index + 1]);
    const max = Math.max(array[index], array[index + 1]);

    if (max - min !== 0 && max - min !== 1) {
      missingElement = isElementFound(array, min + 1) ? missingElement : min +
        1;
    }
  }

  return missingElement;
}

// ------------------test fragment starts from here------------------------
function getIndicator(result, expected) {
  return result === expected ? "✅" : "❌";
}

function testWaterStorage(array, expected) {
  const result = findMissingElement(array);
  const status = getIndicator(result, expected);

  console.log("input: ", array);
  console.log(status, "expected: ", expected, "result: ", result);
  console.log();
}

function testCases() {
  // testFindMissingElement([1, 2, 3], 0);
  // testFindMissingElement([3, 2, 1], 0);
  // testFindMissingElement([-2, -1, -3], 0);
  // testFindMissingElement([0, 3, 1], 2)

  // testFindMissingElement([-2, -4, -1], -3);
  testWaterStorage([0, -2, -3], -1);//failing case

  testWaterStorage([-2, 0], -1);

  // testFindMissingElement([4, 3, 1], 2);
  // testFindMissingElement([], 0);
  // testFindMissingElement([77], 0);
  // testFindMissingElement([67, 66], 0);
  // testFindMissingElement([66, 66], 0);

}

testCases();

