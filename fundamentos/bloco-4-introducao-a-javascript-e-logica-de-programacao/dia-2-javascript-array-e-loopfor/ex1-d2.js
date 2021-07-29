let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerador = 0
for(index = 0; index < numbers.length; index +=1){
numerador += numbers[index]

}
let result = numerador / numbers.length;

if(result > 20){
  console.log("valor maior que 20");
}
else if(result <= 20){
  console.log("valor menor ou igual a 20");
}