// DESESTRUTURAÇÃO
// É basicamente, uma maneira de extrair valores de um objeto ou array e armazenar em variaveis separadas, sem ficar escrevendo 'let nome = pessoa.nome' por exemplo

// OBJETOS
let pessoa = {
    nome: 'Rafael',
    idade: '17',
    cidade: 'São Paulo'
}

// DESESTRUTURANDO
let { nome, idade, cidade } = pessoa // Propriedades do objeto pessoa
console.log(pessoa.nome) // -> 'Rafael'

// Sem desestruturação
let nome1 = pessoa.nome
let idade1 = pessoa.idade
let cidade1 = pessoa.cidade

// ARRAYS
// Funciona de maneira similar

let frutas = ['Manga', 'Banana', 'Abacaxi']
let [primeiraFruta, segundaFruta, terceirFruta] = frutas
console.log(primeiraFruta) // -> 'Manga'

// Sem desestruturação
let fruta1 = frutas[0]
let fruta2 = frutas[1]
let fruta3 = frutas[2]