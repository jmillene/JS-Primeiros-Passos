// Faça um programa que retorne o maior de três números.
// Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorNumero(a, b, c) {
  if (a > b && a > c) {
    return `O numero ${a} é maior;`;
  } else if (b > a && b > c) {
    return `O numero ${b} é maior;`;
  } else {
    return `O numero ${c} é maior;`;
  }
}
console.log(maiorNumero(9, 90, 180));
