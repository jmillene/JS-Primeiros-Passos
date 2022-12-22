let fruits = [3, 4, 10, 1, 12];
soma = 0
for (let index = 0; index < fruits.length; index+=1){
soma+=fruits[index]
}
if(soma > 15){
  console.log(soma);
}else if(soma <= 15){
  console.log('valor menor que 16');
}


let array = [];
let soma = 0;
for(index = 0; index <= 100; index+=1){
  array.push(index)

}
for(index =1; index < array.length; index+=1){
  soma+=array[index]
}

console.log(array);
console.log(soma);