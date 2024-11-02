// Assíncrono são ações no código que não vão ter resultados imediados e vão ter um tempo de espera até executar
// É usado para quando você precisa de uma informação que demora um tempo para executar a próxima

console.log(1)
console.log(2)
console.log(3)
console.log(4)
// Esse código é executado um atrás do outro 1, 2, 3, 4

console.log(1)
console.log(2)
setTimeout(() => console.log(3), 3000)
console.log(4)
// Já esse executa 1, 2, 4, 3 executa um atrás do outro mas o 3 demorando 3 segundos para executar. Sem travar a execução das outras tarefas


async function informacaoPais(paisDesejado) { // Criando um canal de comunicação entre outro sistema com o 'fetch'
    const info = await fetch('https://restcountries.com/v3.1/name/' + paisDesejado) // Colocando dentro um link de uma API, e buscando informações do endereço de acordo com o pais.
    console.log(await info.json()) // Mostrando a informação .json (mas ela também é assíncrona demora um tempo então o 'await')
}

informacaoPais("japan")

// Mas executar a função de imediado, demora até pegar os dados então iria imprimir o 'console.log' antes de pegar as infos, mas isso se resolve colocando o 'await' (ou seja espera as informaçôes ficarem prontas), E só pode usar o 'await' se colocar no começo que ela é 'async'.