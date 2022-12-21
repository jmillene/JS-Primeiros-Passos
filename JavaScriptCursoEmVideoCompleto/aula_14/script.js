function gerar() {
  const inicio = document.getElementById("txt");
  const res = document.getElementById("res");
  const passo = document.getElementById("txt2");
  const fim = document.getElementById("txt1");
  if (inicio.value.length == 0) {
    res.innerHTML = `Impossivel contar!`;
  } else if (
    passo.value.length == 0 ||
    fim.value.length == 0 ||
    inicio.value.length == 0
  ) {
    res.innerHTML = 'Impossível contar'
    alert(`[ERROR] Faltam dados!`);
   
  } else {
    res.innerHTML = "Contando...";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if(passo.value <= 0){
      alert(`Passo inválido! Considerando PASSO 1`)
p=1
    }
    if(i < f){
      // CONTAGEM CRESCENTE
      for (let index = i; index <= f; index += p) {
        res.innerHTML += `${index }\u{1F449}`;
      }
      res.innerHTML += `\u{1F3C1}`

    }else{
      // CONTAGEM REGRESSIVA
      for(let index = i; index >=f; index -=p){
res.innerHTML += `${index}\u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
