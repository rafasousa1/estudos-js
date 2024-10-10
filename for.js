// INICIALIZAÇÃO (criando uma variável) ; CONDIÇÃO (O QUE VAI EXECUTAR) ; FINALIZAÇÃO (EXECUTA TODA VEZ NO FINAL DO BLOCO)
nome = "Rafael"

for (let i = 0; i < nome.length; i++) {
    alert(nome[i])
}
/////////////
num = 6

for (let i = 0; i <= 10; i++) {
    console.log(num * i)
}
/////////////

for (let i = 10; i >= 1; i--) {
    console.log(i)
}
/////////////
['a', 'b'].forEach(function(item) {
    console.log(item)
})
/////////////
let lista = []

for (let i = 1; i <= 10; i++) {
    lista.push(i)
}
/////////////