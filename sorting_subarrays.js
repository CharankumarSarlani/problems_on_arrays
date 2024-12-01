const array = [
  [3, 2, 3],
  [1, 4, 2]
]

function sort(array) {
  for (let index = 0; index < array.length; index++) {
    for (let subIndex = index + 1; subIndex < array.length; subIndex++) {
      
      if (array[index] > array[subIndex]) {
        let temp = array[subIndex]
        array[subIndex] = array[index]
        array[index] = temp
      }
    }
  }

  return array;
}

function main(array) {
  const sortedSubArrays = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sortedSubArrays[i] = sort(array[i]);
    }
  }

  return sortedSubArrays;
}

console.log(array);
console.log(main(array));
console.log(array);