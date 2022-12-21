const date = new Date().toLocaleTimeString();
console.log(`Agora são exatamente ${date} horas`);

if (date < 12) {
  console.log("Bom dia");
} else if (date <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
