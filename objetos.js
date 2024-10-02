// 1) ESTRUTURA EM JS QUE SE TRABALHA COM Dicionários Chave-valor
// 2) E esse par 'chave-valor' é chamado de propriedade (sendo as chaves o NOME, e o valor o VALOR que nem de uma variável)
// 3) Diferente dos arrays eles não possuem sequência
// 4) E a propriedade pode ter string números bools como chave
// 5) "let objeto = {}"

let pessoa = {
    nome: 'Rafael',
    idade: '17',
}

pessoa.idade = 20 // alterando a idade
pessoa.sobrenome = 'Sousa' // adicionando uma nova propriedade


console.log(pessoa.nome); // Acessando a propriedade 'nome'

// Iterando sobre propriedade
for(let chave in pessoa) { // Passando por cada propriedade do objeto "pessoa" printando nome e valor dentro
    console.log(chave + ": " + pessoa[chave])
}

let outraPessoa = pessoa
outrapessoa.nome = "Mario"
console.log(pessoa.nome) // 'outraPessoa' é uma referência ao mesmo objeto que 'pessoa'. Ao mudar nome através de 'outraPessoa', o objeto original 'pessoa' também é alterado.

