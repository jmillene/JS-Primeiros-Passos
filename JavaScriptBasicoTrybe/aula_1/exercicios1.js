// Utilize if/else para escrever um código que retorne o maior de dois números.
// Defina, no começo do seu código, duas constantes com os valores que serão comparados.

function numeroMaior(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(numeroMaior(10,7));

// const a = 20;
// const b = 21;

// if (a > b) {
//   console.log("'a' é maior que 'b'");
// } else {
//   console.log("'b' é maior que 'a'");
// };

// Elabore alguns códigos e imprima o resultado no console usando o console.log, 
// um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas
// no começo com os valores que serão operados. Escreva códigos para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
 
const a = 45;
const b = 20;

console.log(" A soma é : ", a+b);
console.log(" A substração é : ", a-b);
console.log(" A multiplicaçãoé : ", a*b);
console.log(" A divisão é : ", a/b);
console.log(" O resto da divisão é : ", a%b);
