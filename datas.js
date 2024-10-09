// MANIPULANDO E COMPARANDO DATAS

// CRIANDO UM CALENDÁRIO DO DIA NO CONSOLE

let datas = new Date() // Colocando na variável o objeto Date()

let dia = datas.getDate() // Pegando o dia de hoje

if (dia < 10) { // Se o dia for menor do que 10, ele coloca um 0 na frente, senão continua igual
    dia = `0${dia}`
} else {
    dia
}

let mes = datas.getMonth() + 1 // No mês a mesma coisa só que tem que adicionar mais um pois funciona que nem um Array. JANEIRO MÊS 0 -> FEVEREIRO MÊS 1 etc.

if (mes < 10) {
    mes = `0${mes}`
}

let ano = datas.getFullYear() // Pega o ano atual

console.log(`${dia}/${mes}/${ano}`)

// COMPARANDO DATAS

const data1 = new Date("2024/10/09") // Formato ano mês dia
const data2 = new Date("2024/10/09") // Formato ano mês dia

// Comparando se as datas são iguais
if (data1.getTime() == data2.getTime()) { // O 'get.Time()' retorna um número de milissegundos que ja se passaram (desde 1 Janeiro de 1970) se forem iguais cai no true
    console.log("Datas iguais!")
} else if (data1.getTime() > data2.getTime()) {
    console.log(`A data ${data1}, é maior!`)
} else {
    console.log(`A data ${data2}, é maior!`)
}