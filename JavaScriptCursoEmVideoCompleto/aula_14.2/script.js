function tabuada() {
  let num = document.getElementById("txt");
  let tabuada = document.getElementById("seltab");
  if (num.value.length == 0 && num.value == "") {
    alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tabuada.innerHTML = '';
    while(c <= 10){
      let item = document.createElement('option');
      item.text = `${n} X ${c} = ${n*c}`
      item.value = `tab${c}`
      tabuada.appendChild(item);
      c++
    }
  }
}
