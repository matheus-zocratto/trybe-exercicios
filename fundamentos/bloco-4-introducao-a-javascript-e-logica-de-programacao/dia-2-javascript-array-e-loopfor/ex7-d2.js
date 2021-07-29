let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowestNumber = numbers[0];

for(index = 0; index < numbers.length; index +=1){
  if(lowestNumber > numbers[index]){
    lowestNumber = numbers[index]
  }
}
console.log(lowestNumber);