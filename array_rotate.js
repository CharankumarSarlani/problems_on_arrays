function rotation(array, times) {

  for (let index = 0; index < times; index++) {
    array.unshift(array.pop());
  }

  return array;
}

console.log(1, 2, 3);
console.log(rotation([1, 2, 3], 0));
console.log(rotation([1, 2, 3], 1));
console.log(rotation([1, 2, 3], 2));
console.log(rotation([1, 2, 3], 3));
console.log(rotation([1, 2, 3], 4));

