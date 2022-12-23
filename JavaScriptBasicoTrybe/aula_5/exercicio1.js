// Altere o tipo das variáveis (var) para let ou const 
// para que respeitem o escopo em que foram declaradas.

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
        console.log('Idade dentro do for:', idade)
    }
    // console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
}
imprimeIdade()