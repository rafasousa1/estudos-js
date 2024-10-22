// REST E SPREAD

// REST
// Vamos supor que temos uma função de mostrar uma lista de clientes

function showList(company, ...clients) { // Estes 3 pontos é o REST, Seria basicamente, o que for adicionado a mais é colocado dentro de um array
    console.log(company)
    console.log(clients)
}

showList("Nike", "Marcelo", "Maria", "Alberto") // "Nike" ficando fora do array e os nomes dentro

// SPREAD

// Sendo a mesma coisa dos 3 ponts mas de forma espalhada

const numeros = [50, 56, 33, 21, 70] // Pegar o maior número utilizando SPREAD

console.log(Math.max(...numeros)) // Se colocarmos apenas a variavel numeros, ira dar 'NaN' pois é um array, então basicamente podemos espalhar a lista com o SPREAD, a mesma coisa que colocar de um em um na função Math

// CLONANDO OBJETOS COM SPREAD

const carro = {
    cor: "Preto",
    portas: 2,
    ano: 2022,
}

const cloneCarro = {...carro, marca: 'Porsche', turbo: true} // Se tornando um novo objeto sem ser 'const cloneCarro = carro'. Além de poder adicionar mais propriedades
console.log(cloneCarro)