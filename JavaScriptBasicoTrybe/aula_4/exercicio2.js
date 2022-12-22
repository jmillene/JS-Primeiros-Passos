// Faça cinco programas, um para cada operação aritmética básica.
// Seu programa deve ter duas constantes, a e b,
// definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma(a, b) {
  return a + b;
}
console.log(`A soma é : ` + soma(3, 2));

function sub(a, b) {
  return a - b;
}

console.log(`A subtração é : ` + sub(2, 1));

function multi(a, b) {
  return a * b;
}
console.log(`A multiplicação é : ` + multi(2, 2));

function divisao(a, b) {
  return a / b;
}
console.log(`A divisão é : ` + divisao(76, 2));

function restoDivisao(a, b) {
  return a % b;
}
console.log(`O resto da divisão é : ` + restoDivisao(6, 2));


