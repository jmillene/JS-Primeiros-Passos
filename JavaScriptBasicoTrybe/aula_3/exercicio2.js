let word = 'tryber';
let reverse = ''

for(index = 0; index < word.length -1; index+=1){
  reverse = word.split("").reverse().join("");
}
console.log(reverse);