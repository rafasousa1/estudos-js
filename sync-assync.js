// Uma função síncrona, é quando o interpretador entende e executa em sequência linha por linha do código ou seja, uma função só é executada quando a anterior termina.
// Tudo acontece no momento em que a função é chamada.

function funcaoSincrona() {
    console.log("FUNÇÃO SÍNCRONA")
}

console.log("inicio")

funcaoSincrona()

console.log("fim")

// Uma função assíncrona, é quando o interpretador entende que não precisa esperar que uma função seja concluída para executar as outras linhas.
// E permite que operações demoradas, como requisições a servidores ou leitura de arquivos, não bloqueiem a execução do restante do código.
// No exemplo embaixo esperando 300 milisegundo para executar.

function funcaoAssincrona() {
    setTimeout(() => { // Segura a execução do código por um determinado tempo
        console.log("FUNÇÃO ASSÍNCRONA")
    }, 300)   
}

console.log("inicio")

funcaoAssincrona()

console.log("fim")
