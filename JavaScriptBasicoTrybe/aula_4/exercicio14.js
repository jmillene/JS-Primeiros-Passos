let  array = [2, 3, 6, 7, 10, 1];
let maior = array[0]
function maiorNumeroIndice(){
  for(let index = 1; index < array.length; index+=1 ){
if(array[index] > maior){
  maior = array[index]
}
  }
}

console.log(maiorNumeroIndice(maior));