function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fAno = document.getElementById("txtano");
  let result = document.getElementById("res");
  if (fAno.value.length == 0 || fAno.value > ano) {
    alert(`[ERROR] Veirifique os dados e tente novamente!`);
  } else {
    let fSex = document.getElementsByName("radsex");
    let idade = ano - Number(fAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fSex[0].checked) {
      genero = "Homem";
      // Criança
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "menino.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "homemjovem.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "homemmeiaidade.png");
      } else {
        // idoso
        img.setAttribute("src", "idoso.png");
      }
    } else if (fSex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "menina.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "jovem.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "mulhermeiaidade.png");
      } else {
        // idoso
        img.setAttribute("src", "idosa.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
