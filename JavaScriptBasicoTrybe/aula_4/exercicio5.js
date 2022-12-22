// Faça um programa que, dado um valor recebido como parâmetro,
// retorne “positive” se esse valor for positivo, “negative” se for negativo,
// e caso não seja nem positivo e nem negativo retorne “zero”.

function number(a) {
  if (a < 0) {
    return `O número ${a} é negativo`;
  } else if (a > 0) {
    return `O número ${a} é positivo`;
  } else {
    return "zero";
  }
}
console.log(number(-1));
