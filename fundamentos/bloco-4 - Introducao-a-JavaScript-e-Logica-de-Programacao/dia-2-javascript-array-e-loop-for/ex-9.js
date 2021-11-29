let numbers = [];
let result = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}
for (let index = 0; index < numbers.length; index += 1){
    result.push(numbers[index]/2);
}
console.log(result);