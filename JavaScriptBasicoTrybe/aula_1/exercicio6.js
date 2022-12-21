// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100)
// em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada
// for menor que 0 ou maior que 100.

const porcentagem = 65;

if (porcentagem >= 90) {
  console.log("Você tirou  A");
} else if (porcentagem >= 80) {
  console.log("Você tirou B");
} else if (porcentagem >= 60) {
  console.log("Você tirou D");
} else if (porcentagem >= 50) {
  console.log("Você tirou E");
} else if (porcentagem < 50) {
  console.log("Você tirou F");
} else if (porcentagem < 0 && porcentagem > 100) {
  console.log("Error, nota inválida");
}
