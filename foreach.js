// O forEach é especialmente utilizado para iterar ou seja percorrer por ARRAYS
// E só irá parar de executar quando o ARRAY acabar

const nomes = ['Marcelo', 'Paulo', 'José', 'Maria', 'Laura', 'Vitoria']

nomes.forEach(function(nome, index, array) { // PARA CADA NOME EXECUTE TAL COISA
    console.log(nome)
    console.log(index)
    console.log(array)
})

// O PRIMEIRO PARÂMETRO 'nome' MOSTRA O QUE TEM NA POSIÇÃO 
// O SEGUNDO PARÂMETRO 'index' MOSTRA A POSIÇÃO (SEMPRE COMEÇANDO EM 0)
// O TERCEIRO PARÂMETRO 'array' MOSTRA O ARRAY COMPLETO

// OBS -> SÓ O PRIMEIRO PARÂMETRO É OBRIGATÓRIO, OS OUTROS 2 SÃO OPCIONAIS


const users = [
    {nome: 'José', idade: 32, estado: 'São Paulo'},
    {nome: 'Paulo', idade: 15, estado: 'Minas Gerais'},
    {nome: 'André', idade: 23, estado: 'Bahia'},
]

users.forEach(function(user) { // EXEMPLO USANDO forEach
    if (user.idade <= 18) {
        console.log(`O user ${user.nome}, é menor de idade`)
    }
})