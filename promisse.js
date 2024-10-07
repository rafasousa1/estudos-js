// Um dos casos mais comuns para trabalhar com código assíncrono é quando estiver constando alguma API.

// o método .get é utilizado para trabalhar com APIs aceitando URL's e essa função retorna uma PROMISE

// Uma promisse é a promessa de que algum dado vai ser retornado, podendo ser cumprida (resolve) ou não cumprida (reject).
// Toda vez que tiver um método que retorna uma promisse colocar logo depois '.then()' que é utilizado para promisses.
// O .then() permite que você execute código depois que a Promise for resolvida com sucesso.
// O primeiro callback é executado quando a Promise é resolvida com sucesso.

// O segundo callback (opcional) é executado se a Promise for rejeitada.
// Podendo ser utilizado o '.catch()' permitindo que execute quando não for cumprida, usada no tratamento de erros.

// Também tendo o '.finally' que mostra a promisse de qualquer jeito mesmo se for rejeitada ou concluída

let prom = new Promise((resolve, reject) => { // Função anônima 
    let result = 2 + 2

    if (result == 4) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

prom.then((resolve) => {
    console.log(`Nice, ${resolve}`)
})
.catch((reject) => {
    console.log(`ERROR, ${reject}`)
})

//////////////////////////
const betterdev = 'Rafa'

function whoisBetter() {

    return new Promise((resolve, reject) => { 
    if (betterdev != 'Rafa') {
        reject({
            name: 'WRONG',
            message: betterdev + '? Really'
        })
    } else {
        resolve({
            name: betterdev,
            message: betterdev + ' is the best'
        })
    }
})
}

whoisBetter()
    .then((resolve) => {
        console.log(resolve.name + '? Yeah ' + resolve.message)
    })
    .catch((reject) => {
        console.log(reject.name + ' ' + reject.message)
    })