const xadrez = "Dama";

switch (xadrez.toLowerCase()) {
  case "peão":
    console.log("Move-se sempre para frente,");
    break;
  case "bispo":
    console.log("Move-se na diagonal");
    break;
  case "cavalo":
    console.log("Mova-se horizontal e uma na vertical");
    break;
  case "torre":
    console.log("Mova-se para esquerda ou direita em qualquer fileira");
    break;
  case "dama":
    console.log("Mova-se para frente e para trás");
    break;
  case "rei":
    console.log("Mova-se para qualquer casa adjacent");
    break;
  default:
    console.log("Peça desconhecida");
}
