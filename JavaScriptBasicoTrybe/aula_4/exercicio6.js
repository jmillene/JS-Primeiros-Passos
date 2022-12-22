// Faça um programa que receba três constantes com os valores dos três ângulos 
// internos de um triângulo. Retorne true se os ângulos representarem os ângulos
//  de um triângulo e false, caso contrário. Se algum ângulo for inválido,
// o programa deve retornar uma mensagem de erro.

const a  = 30;
const b = 60;
const c = 60;
const soma = a + b + c;
function angulosTriangulo(){
  if( soma == 180){
    return 'true'
  }else{
    return 'false'
  }
}

console.log(angulosTriangulo());