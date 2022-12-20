let num = document.getElementById("txt");
let analisador = document.getElementById("analisador");
const add = document.getElementById("adicionar");
const finaliza = document.getElementById("finalizar");
const res = document.getElementById("res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adiconado.`;
    analisador.appendChild(item);
    res.innerHTML = ''
  } else {
    alert("Valor inválido ou já adicionado na lista!");
  }
  num.value = '';
  num.focus();
}

function finalizar() {
  if(valores.length == 0){
    alert('Adicione valores antes de finalizar!')
  }else{
    let total = valores.length;
    let maior = valores [0]
    let menor = [0]
    let soma = 0;
    let media = 0;
    for(let pos in valores){
      soma+=valores[pos]
      if(valores[pos] > maior){
        maior = valores[pos]
      }
      if(valores[pos] < menor){
        menor = valores[pos]
      }
    }
    media = soma/total;
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
    res.innerHTML += ` <p> O maior valor informar foi ${maior}.</p>`
    res.innerHTML += `<p>  O menor valor informar foi ${menor}.</p>`
    res.innerHTML += `<p>  A soma de todos os valores ${soma}.</p>`
    res.innerHTML += `<p>  A média de todos os valores ${media}.</p>`

  }
}