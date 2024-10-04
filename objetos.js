// 1) Permite com que ENCAPSULE todo um conjunto de dados referente a uma entidade em uma coisa só
// 2) E a propriedade pode ter string números bools como chave
// 3) SINTAXE -> "const objeto = {}"

const dadosRafa = {
    nome: 'Rafael',
    idade: 17,
    endereco: 'Rua dos Livros',
    identidade: 543212345,
}

console.log(`Dados do Rafa
    Nome: ${dadosRafa.nome}
    Idade: ${dadosRafa.idade}
    Endereço: ${dadosRafa.endereco}
    Identidade: ${dadosRafa.identidade}`) // Mostrar no console uma propiedade específica do objeto

// Podemos também fazer objetos dentro de um objeto

const usuario = {
    nome: 'Marcos',
    idade: 24,
    endereco: {
        rua: 'Rua dos Vasos',
        numeroRua: 23
    },
}

// Podemos também escrever funções

const pessoa = {
    nome: 'Mateus',
    idade: 27,
    dizerOla() {
        console.log(`Olá meu nome é ${this.nome}`) // O 'this' quer dizer que está chamando a propriedade DESSE objeto
    }
}
pessoa.dizerOla()

// Adicionando dados em apenas uma linha em um Array com objetos

const users = [
    {nome: 'José', idade: 32, estado: 'São Paulo'},
    {nome: 'Paulo', idade: 15, estado: 'Minas Gerais'},
    {nome: 'André', idade: 23, estado: 'Bahia'},
]