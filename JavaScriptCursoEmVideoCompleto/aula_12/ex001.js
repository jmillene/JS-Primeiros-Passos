let idade = 4;
if (idade < 16) {
  console.log(`Você tem ${idade} anos e você é menor de idade, não vota!`);
} else {
  if (idade < 18 || idade > 65) {
    console.log(`Você tem ${idade} anos e seu voto é opcional!`);
  } else {
    console.log(
      `Vocẽ tem ${idade} anos e você é maior de idade, voto é obrigátorio!`
    );
  }
}
