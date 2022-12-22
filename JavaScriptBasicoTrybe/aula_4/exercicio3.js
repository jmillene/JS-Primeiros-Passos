// Faça um programa que retorne o maior de dois números.
// Defina, no começo do programa, duas constantes com os valores que serão comparados

function maiorNumero(a, b) {
  if (a > b) {
    return `O numero ${a} é maior;`;
  } else {
    return `O numero ${b} é maior;`;
  }
}
console.log(maiorNumero(10, 20));
