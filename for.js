// INICIALIZAÇÃO (criando uma variável) ; CONDIÇÃO (O QUE VAI EXECUTAR) ; FINALIZAÇÃO (EXECUTA TODA VEZ NO FINAL DO BLOCO)
nome = "Rafael"

for (let i = 0; i < nome.length; i++) {
    alert(nome[i])
}
/////////////

const numero = parseFloat(prompt("Digite um número para sua tabuada"))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += "- " + numero + "X" + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da tabuada do número " + numero + ":\n\n" + resultado)
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
let numero2 = prompt("Digite um número para sua tabuada:")

lista.forEach(function(item) {
    alert(numero2 * item)
})