// TRABALHANDO COM TEMPO EM JS


/////////////////////////////////////// setTimeout //////////////////////////////////////////////////

// setTimeout -> Espera um determinado tempo para executar alguma coisa.

setTimeout( function() { // Passando uma função que demora 1 sec (1000 milésimos) para executar
    console.log("Hello")
}, 1000)

// Podemos também escrever a função fora e colocar dentro do set, deixando até muito mais curta para executar
function HelloW() {
    console.log("Hello World!")
}
setTimeout(function() {
    HelloW()
}, 2000)

setTimeout(HelloW, 1000) // Encurtando em apenas uma linha
////////////////////////////////////////////////////////////////////////////////////////////////////

// *************************************** setInterval *********************************************

// setInterval -> Faz uma execução que sempre quando der o tempo ela volta denovo e vai executando.

let time = 0 

let interval = setInterval(function() { // Criando uma função que encrementa 1 a cada 2 segundos
    changeValue()
}, 2000) 

function changeValue() {
    time++
    console.log(`Current Value: ${time}`)
}
// **************************************************************************************************