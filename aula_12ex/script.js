function carregar() {
  let msg = document.getElementById("msg");
  let imagem = document.getElementById("imagem");
  let data = new Date();
  let horas = data.getHours();

  msg.innerHTML = `Agora são ${horas} horas.`;

  if (horas >= 0 && horas < 12) {
    // BOM DIA
    imagem.src = "manha.png";
    document.body.style.background = "#e2cd9f";
  } else if (horas >= 12 && horas <= 18) {
    // BOA TARDE
    imagem.src = "tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    // BOA NOITE
    imagem.src = "noite.png";
    document.body.style.background = "#515154";
  }
}
